import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
    selector: 'pending-header',
    templateUrl: './pending-header.component.html',
    styleUrls: ['./pending-header.component.css'],

})
export class PendingHeaderComponent {

    @Input()
    requestCount: number;

    @Output()
    toggleRequests: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }


    expandRequests() {
        this.toggleRequests.emit(true);
    }

    collapseRequests() {
        this.toggleRequests.emit(false);
    }
}