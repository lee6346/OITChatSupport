import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import {  ChatThread } from '../../models';

@Component({
    selector: 'chat-thread',
    templateUrl: './chat-thread.component.html',
    styleUrls: ['./chat-thread.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatThreadComponent {

    private currentToggleState: string = 'inactive';

    @Input()
    thread: ChatThread;
    
    @Input()
    isSelectedId: boolean;

    private _chatDuration: number = 0;

    @Input()
    set chatDuration(chatDuration: number) {
        this._chatDuration += 1000;
    }

    @Output()
    switchThread: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    removeThread: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    onThreadClicked() {
        this.switchThread.emit(this.thread.threadId);
    }

    onRemoveClicked() {
        this.removeThread.emit(this.thread.threadId);
    }

    threadStatusSelector(): any {
        if (this.thread.active) 
            return { 'active-badge': true };
        else
            return { 'inactive-badge': true };
    }

    currentSelectContainer(): any {
        if (this.isSelectedId)
            return { 'selected-thread-container': true };
    }

}