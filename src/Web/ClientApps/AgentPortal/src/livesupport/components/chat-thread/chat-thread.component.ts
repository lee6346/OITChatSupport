import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { transition, trigger, state, animate, style } from '@angular/animations';
import {  ChatThread } from '../../models';

@Component({
    selector: 'chat-thread',
    templateUrl: './chat-thread.component.html',
    styleUrls: ['./chat-thread.component.css'],
    animations: [
        trigger(
            'toggleAnimation', [
                transition(':enter', [
                    style({ transform: 'translateY(0)', opacity: 0 }),
                    animate('350ms', style({ transform: 'translateY(10%)', opacity: 1 }))
                ]),
                transition(':leave', [
                    style({ transform: 'translateY(10%)', opacity: 1 }),
                    animate('350ms', style({ transform: 'translateY(0)', opacity: 0 }))
                ])
            ]
        ),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatThreadComponent {

    @Input()
    thread: ChatThread;

    @Input()
    opened: boolean = false;
    
    @Input()
    isSelectedId: boolean;

    @Output()
    switchThread: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    removeThread: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    toggleContent() {
        this.opened ? this.opened = false : this.opened = true;
    }

    onThreadClicked() {
        this.switchThread.emit(this.thread.threadId);
    }

    onRemoveClicked() {
        this.removeThread.emit(this.thread.threadId);
    }

    threadStatusSelector(): any {
        if (!this.thread.active) 
            return { 'disconnected-thread': true };
        else if (this.thread.unseenMessages.length > 0) 
            return { 'active-thread': true };
        else
            return { 'inactive-thread': true };
    }

    currentSelect(): any {
        if (this.isSelectedId) 
            return { 'selected-thread': true };
    }

    currentSelectContainer(): any {
        if (this.isSelectedId)
            return { 'selected-thread-container': true };
    }

    currentSelectLink(): any {
        if (this.isSelectedId) 
            return { 'selected-thread-link': true };
    }
}