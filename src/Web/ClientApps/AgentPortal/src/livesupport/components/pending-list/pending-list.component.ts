import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { LiveRequest } from '../../models';

@Component({
    selector: 'pending-list',
    templateUrl: './pending-list.component.html',
    styleUrls: ['./pending-list.component.css'],
    
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingListComponent {

    @Input()
    liveRequests: LiveRequest[];

    @Input()
    listToggle: boolean = false;

    @Output()
    acceptRequest: EventEmitter<LiveRequest> = new EventEmitter<LiveRequest>();

    constructor() { }

    onRequestAccepted(liveRequest: LiveRequest) {
        this.acceptRequest.emit(liveRequest);
    }  
}
