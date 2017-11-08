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
        trigger('toggleThread', [
            state('inactive', style({
                transform: 'scale(1.01)'
            })),
            state('active', style({
                transform: 'scale(1)'
            })),
            transition('inactive => active', animate('200ms')),
            transition('active => inactive', animate('200ms'))
        ]),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatThreadComponent {

    private currentToggleState: string = 'inactive';

    @Input()
    thread: ChatThread;

    @Input()
    set opened(opened: boolean) {
        opened ? this.currentToggleState = 'active' : 'inactive';
    }
    
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

    onToggleContent() {
        this.opened ? this.opened = false : this.opened = true;
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