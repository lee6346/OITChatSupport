import { Component, Input, Output, EventEmitter } from '@angular/core';
import { transition, trigger, state, animate, style, query } from '@angular/animations';

@Component({
    selector: 'chat-threads-header',
    templateUrl: './chat-threads-header.component.html',
    styleUrls: ['./chat-threads-header.component.css']
})
export class ChatThreadsHeaderComponent {

    @Input()
    currentThreadCount: number;

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