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

    labelColorSelector(sender: string): any {
        if (sender === 'student')
            return { 'label-student': true };
        else if (sender === 'AskRowdy')
            return { 'label-bot': true };
        else
            return { 'label-self': true };
    }

    textSenderAlignment(sender: string): any {
        if (sender.toLowerCase() === 'student')
            return { 'align-text-left': true };
        else
            return { 'align-text-right': true };
    }
    
}