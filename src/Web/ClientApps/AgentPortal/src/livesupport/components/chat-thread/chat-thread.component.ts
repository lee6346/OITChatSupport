import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { transition, trigger, state, animate, style } from '@angular/animations';
import {  DirectLineThreadVm } from '../../viewmodels';

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
        trigger(
            'threadInOut', [
                transition(':enter', [
                    style({ transform: 'translateX(100%)', opacity: 0 }),
                    animate('250ms', style({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                transition(':leave', [
                    style({ transform: 'translateX(0)', opacity: 1 }),
                    animate('250ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                ])
            ]
        ),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatThreadComponent {

    @Input()
    thread: DirectLineThreadVm;

    @Output()
    switchThread: EventEmitter<string> = new EventEmitter<string>();

    opened: boolean = false;

    constructor() { }

    toggleContent() {
        this.opened ? this.opened = false : this.opened = true;
    }

    onThreadClicked() {
        this.switchThread.emit(this.thread.threadId);
    }
}