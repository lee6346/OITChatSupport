import { Component, Input, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';

import { Activity } from 'botframework-directlinejs';

@Component({
    selector: 'chat-message',
    templateUrl: './chat-message.component.html',
    styleUrls: ['./chat-message.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageComponent implements OnInit{

    @Input()
    chatMessage: Activity;

    @Input()
    textFilter: string = '';

    @Input()
    messageContinuation: boolean;

    @Output()
    newMessageReceived: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    ngOnInit() {
        this.newMessageReceived.emit();
    }

    labelProperties(sender: string): any {
        if (sender === 'student')
            return { 'label-remote': true };
        else
            return { 'label-host': true };
    }

    bubbleProperties(sender: string): any {
        if (sender.toLowerCase() === 'student') {
            return {
                'remote-bubble': true
            };
        }
        else {
            return {
                'host-bubble': true
            };
        }
    }

    alignWrapperProperties(sender: string): any {
        if (sender.toLowerCase() === 'student')
            return { 'align-wrapper-left': true };
        else
            return { 'align-wrapper-right': true };
    }
    
}