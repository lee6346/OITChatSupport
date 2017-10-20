﻿import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { LiveRequest } from '../../models/live-request.model';

@Component({
    selector: 'pending-list',
    templateUrl: './pending-list.component.html',
    styleUrls: ['./pending-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingListComponent implements OnInit{

    @Input()
    liveRequests: LiveRequest[];
    @Output()
    acceptRequest: EventEmitter<LiveRequest> = new EventEmitter<LiveRequest>();

    constructor() { }
    ngOnInit() {
        console.log('the pending reuqests ' + this.liveRequests);
        console.log('first request: ' + this.liveRequests[0]);
    }
    onLiveRequestClick(liveRequest: LiveRequest) {
        this.acceptRequest.emit(liveRequest);
    }
}
