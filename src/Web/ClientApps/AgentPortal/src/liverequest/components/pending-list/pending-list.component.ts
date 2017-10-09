import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { LiveRequest } from '../../models/live-request.model';

@Component({
    selector: 'pending-list',
    templateUrl: './pending-list.component.html',
    styleUrls: ['./pending-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingListComponent implements OnInit {


    @Input()
    liveRequests: LiveRequest[];

    @Output()
    acceptRequest: EventEmitter<LiveRequest> = new EventEmitter<LiveRequest>();


    constructor() { }

    ngOnInit() { }

    selectLiveRequest(liveRequest: LiveRequest) {
        this.acceptRequest.emit(liveRequest);
    }
}
