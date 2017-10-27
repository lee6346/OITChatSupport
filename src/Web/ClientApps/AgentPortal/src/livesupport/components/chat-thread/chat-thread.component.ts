import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
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
    set itemToggle(listToggle: boolean) {
        this.opened = listToggle;
    }

    @Output()
    switchThread: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    removeThread: EventEmitter<string> = new EventEmitter<string>();

    opened: boolean = false;

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
}