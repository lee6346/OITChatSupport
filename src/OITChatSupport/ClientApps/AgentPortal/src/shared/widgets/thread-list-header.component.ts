import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'thread-list-header',
    template: `
    <div class="row thread-header">
        <div class="thread-header-title">
            <ng-content></ng-content>
        </div>

        <div class="btn-group btn-group-xs thread-header-toggle-buttons" role="group">
            <button type="button" class="btn btn-default" (click)="expandRequests()">Expand</button>
            <button type="button" class="btn btn-default" (click)="collapseRequests()">Collapse</button>
        </div> 
    </div>
    `,
    styles: [`
        .thread-header-title {
            color: #000000;
            font-size: 18px;
            font-weight: bold;
            padding: 0 0 10px 0;
            margin: 0;
        }


        .thread-header-toggle-buttons {
            float: right;
        }

        .btn-default {
            background-color: #e3e3e3;
            font-weight: bold;
            color: black;
        }
        .thread-header {
            margin: 0;
            background: #f5f5f5;
            border-radius: 3px;
            border: 1px solid #e3e3e3;
            height: 17%;
            padding: 5px;
        }
    `]
})
export class ThreadListHeader {

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