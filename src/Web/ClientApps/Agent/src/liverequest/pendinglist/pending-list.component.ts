import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import * as Rx from 'rxjs/Rx';

import { LiveRequest } from '../../model';
import { LiveRequestService, MessageTransferService } from '../../core';


@Component({
    selector: 'pending-list',
    templateUrl: './pending-list.component.html',
    styleUrls: ['./pending-list.component.css'],
})
export class PendingListComponent implements OnInit, OnDestroy {


    //to hide and show the pending list (consider using routes and lazy modules)
    @Input()
    private displayList: boolean = true;

    private liveRequests: LiveRequest[] = [];



    @Output()
    private requestSelection: EventEmitter<LiveRequest> = new EventEmitter<LiveRequest>();
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


    public subscribeToLiveRequests() {
        this.liveRequestService.retrievePendingRequests$()
            .flatMap(requests => requests)
        .concat()
    }

    public selectPendingRequest(liveRequest: LiveRequest): void {

    }
    public removeFromList(conversationId: string): void {
        let index = this.liveRequests
            .findIndex(item => item.conversationId === conversationId);
        if (index !== -1)
            this.liveRequests.splice(index, 1);
    }

    public addToList(conversationId: string): void {
        let index = this.liveRequests
            .findIndex(item => item.conversationId === conversationId);
        if (index === -1)
            this.liveRequests.push()
    }

    

    


}