import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pending-header',
    templateUrl: './pending-header.component.html',
    styleUrls: ['./pending-header.component.css']
})
export class PendingHeaderComponent {

    @Input()
    totalRequests: number;

    @Output()
    changeInterval: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    expandRequests: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }


    onExpandClicked() {
        this.expandRequests.emit(true);
    }

    onCollapseClicked() {
        this.expandRequests.emit(false);
    }
}