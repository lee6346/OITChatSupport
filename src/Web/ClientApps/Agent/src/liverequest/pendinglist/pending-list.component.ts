import { Component, Output, Input, EventEmitter } from '@angular/core';

import { LiveRequest } from '../../model';


@Component({
    selector: 'pending-list',
    templateUrl: './pending-list.component.html',
    styleUrls: ['./pending-list.component.css'],
})
export class PendingListComponent{

    private _liveRequests: LiveRequest[] = [];

    @Input()
    set liveRequests(liveRequest: LiveRequest) {
        this.addToList(liveRequest);
    }

    @Input()
    set removeRequests(liveRequest: LiveRequest) {
        this.removeFromList(liveRequest);
    }

    @Output()
    private requestSelect: EventEmitter<LiveRequest> = new EventEmitter<LiveRequest>();

    constructor() { }

    public selectPendingRequest(liveRequest: LiveRequest): void {
        this.requestSelect.emit(liveRequest);
    }

    public removeFromList(liveRequest: LiveRequest): void {
        let index = this.getListIndex(liveRequest.conversationId);
        if (index !== -1) {
            this._liveRequests.splice(index, 1);
        }
    }

    public addToList(liveRequest: LiveRequest): void {
        let index = this.getListIndex(liveRequest.conversationId);
        if (index === -1)
            this._liveRequests.push()
    }
    
    public getListIndex(conversationId: string): number {
        return this._liveRequests.findIndex(
            item => item.conversationId === conversationId
        );
    }
}