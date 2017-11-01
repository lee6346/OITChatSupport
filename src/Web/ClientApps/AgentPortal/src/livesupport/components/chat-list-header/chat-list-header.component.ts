import { Component, Input, Output, EventEmitter } from '@angular/core';
import { transition, trigger, state, animate, style, query } from '@angular/animations';

@Component({
    selector: 'chat-list-header',
    templateUrl: './chat-list-header.component.html',
    styleUrls: ['./chat-list-header.component.css']
})
export class ChatListHeaderComponent {

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