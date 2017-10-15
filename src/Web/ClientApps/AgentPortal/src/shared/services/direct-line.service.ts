import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/map';

import { DirectLineConnection, DirectLineThread, DirectLineMessageLoad } from '../model';
import { DirectLineGateway } from '../gateway/direct-line.gateway';
import { MessageActivityReceivedAction } from '../../store/action/direct-line.action';
import { DirectLine, Activity } from 'botframework-directlinejs';

@Injectable()
export class DirectLineService {

    private connectionCount: number;
    private directLineThreadPool$: Observable<Activity>;
    private activityEventBaseLine$: Subject<Activity> = new Subject<Activity>();
    private ngUnsubecribe: Subject<void> = new Subject<void>();

    constructor(
        private directLineGateway: DirectLineGateway,
        private store: Store<any>
    ) { this.initializeDirectLineThreadPool(); }

    createDirectLineConnection(conversationId: string): Observable<DirectLineThread> {
        return this.directLineGateway.getNewConnection$(conversationId)
            .map((directLineConnection: DirectLineConnection) =>
                this.createThread(directLineConnection));
    }
    
    buildDirectLineSocket(directLineConnection: DirectLineConnection): DirectLine {
        return new DirectLine({
            conversationId: directLineConnection.conversationId,
            token: directLineConnection.token,
            streamUrl: directLineConnection.streamUrl
        });
    }

    createThread(directLineConnection: DirectLineConnection): DirectLineThread {
        if (this.connectionCount === 0)
            this.initializeDirectLineThreadPool();

        this.connectionCount++;

        let directLine = this.buildDirectLineSocket(directLineConnection);
        console.log('merging connections');
        this.directLineThreadPool$.merge(directLine.activity$);
        let newThread: DirectLineThread = {
            conversationId: directLineConnection.conversationId,
            directLineConnection: directLine
        };
        return newThread;
    }

    removeThread(): void {
        this.connectionCount--;
        //if (--this.connectionCount === 0) {
          //  console.log('ending thread subscription');
            this.endConnection();
        //}
    }

    sendMessage(directLinePayload: DirectLineMessageLoad): void {
        directLinePayload.directLineConnector.postActivity(directLinePayload.message).subscribe(
            (id: string) => console.log('message success sent'),
            (err: any) => console.log('error sending message'),
            ()=> console.log('complete')
        );
    }

    private endConnection(): void {
        this.ngUnsubecribe.next();
        this.ngUnsubecribe.complete();
    }

    private initializeDirectLineThreadPool(): void {
        this.connectionCount = 0;
        console.log('initializing thread pool');
        this.directLineThreadPool$ = this.activityEventBaseLine$
            .asObservable().takeUntil(this.ngUnsubecribe).share();

        //this.registerForDirectLineMessages();
    }
    private registerForDirectLineMessages(): void {
        this.directLineThreadPool$.subscribe(
            (activity: Activity) =>
                this.store.dispatch(new MessageActivityReceivedAction(activity)),
            (err: any) => console.log('error'),
            () => console.log('no more connections')
            );
    }
}
