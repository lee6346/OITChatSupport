import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import * as Rx from 'rxjs/Rx';

import { LiveRequestService, MessageTransferService } from '../core';
import { LiveRequest, CurrentConversation } from '../model';


@Component({
    selector: 'live-request',
    templateUrl: './live-request.component.html',
    styleUrls: ['./live-request.component.css']
})
export class LiveRequestComponent implements OnInit, OnDestroy {

    @Input()
    private agentId: string;
    private ngUnsubscribe: Rx.Subject<void> = new Rx.Subject<void>();

    constructor(
        private liveRequestService: LiveRequestService,
        private messageTransferService: MessageTransferService
    ) { }

    ngOnInit() { }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }


    public acceptLiveRequest(liveRequest: LiveRequest): void {
        this.liveRequestService.acceptLiveRequest$(liveRequest)
            .subscribe(
            next => this.displayLiveRequest(liveRequest),
            err => console.log('error'),
            () => console.log('complete')
        );

    }

    public displayLiveRequest(liveRequest: LiveRequest): void {
        this.messageTransferService.sendCurrentConversation(
            {
                conversationId: liveRequest.conversationId
            } as CurrentConversation
        );
    }

}