import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/merge';

import { DirectLineConnection, DirectLineThread } from '../model';
import { DirectLineGateway } from '../gateway/direct-line.gateway';
import { MessageActivityReceivedAction } from '../../store/action/direct-line.action';
import { Activity, DirectLine } from 'botframework-directlinejs';

@Injectable()
export class DirectLineService {

    //private connectionCount: number;
    private directLineThreadPool$: Observable<Activity>;
    //private ngUnsubecribe: Subject<void>; 

    constructor(
        private directLineGateway: DirectLineGateway,
        private store: Store<any>
    ) {
        this.initializeDirectLineThreadPool();
    }

    getThreadToken$(conversationId: string): Observable<DirectLineConnection> {
        return this.directLineGateway.getNewConnection$(conversationId);
    } 


    createThread(directLineConnection: DirectLineConnection): DirectLineThread {
        //if (this.connectionCount++ === 0)
            //this.initializeDirectLineThreadPool();

        let directLine = this.directLineGateway.getDirectLineSocket(directLineConnection);
        this.directLineThreadPool$.merge(directLine.activity$);
        return {
            conversationId: directLineConnection.conversationId,
            directLineSocket: directLine
        } as DirectLineThread;
    }

    removeThread(): void {
        //if (--this.connectionCount === 0) {
            //console.log('ending thread subscription');
            this.endConnection();
        //}
    }

    sendMessage$(directLine: DirectLine, activity: Activity): Observable<string> {
        return directLine.postActivity(activity);
    }

    private endConnection(): void {
        //this.ngUnsubecribe.next();
        //this.ngUnsubecribe.complete();
    }

    private initializeDirectLineThreadPool(): void {
        //this.connectionCount = 0;
        //this.ngUnsubecribe = new Subject<void>();
        this.directLineThreadPool$ = new Observable<Activity>().share();//.takeUntil(this.ngUnsubecribe);

        this.directLineThreadPool$/*takeUntil(this.ngUnsubecribe)*/
            .subscribe(
            (activity: Activity) =>
                this.store.dispatch(new MessageActivityReceivedAction(activity)),
            (err: any) => console.log('error'),
            () => console.log('no more connections')
        );
    } 
}
