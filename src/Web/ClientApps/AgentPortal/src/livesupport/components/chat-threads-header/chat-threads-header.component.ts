import { Component, Input, Output, EventEmitter } from '@angular/core';
import { transition, trigger, state, animate, style } from '@angular/animations';

@Component({
    selector: 'chat-threads-header',
    templateUrl: './chat-threads-header.component.html',
    styleUrls: ['./chat-threads-header.component.css'],
    animations: [
        trigger('activeButton', [
            state('inactive', style({
                backgroundColor: '#e3e3e3',
                color: '#696969',
                boxShadow: '1px 1px 2px #888888',
                mozBoxShadow: '1px 1px 2px #888888',
                webkitBoxShadow: '1px 1px 2px #888888'
            })),
            state('active', style({
                backgroundColor: '#c0c0c0',
                color: 'white',
            })),
            transition('inactive => active', animate('300ms')),
            transition('active => inactive', animate('300ms'))
        ])
    ]
})
export class ChatThreadsHeaderComponent {

    private collapse: string = 'active';
    private expand: string = 'inactive';

    @Input()
    currentThreadCount: number;

    @Input()
    set expandView(expandView: boolean) {
        if (expandView) {
            this.collapse = 'inactive';
            this.expand = 'active';
        }
        else {
            this.collapse = 'active';
            this.expand = 'inactive';
        }
    }

    @Output()
    toggleCurrentThreads: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }


    expandRequests() {
        this.toggleCurrentThreads.emit(true);
    }

    collapseRequests() {
        this.toggleCurrentThreads.emit(false);
    }
}