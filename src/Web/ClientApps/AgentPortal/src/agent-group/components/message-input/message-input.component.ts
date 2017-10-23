﻿import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'message-input',
    templateUrl: './message-input.component.html',
    styleUrls: ['./message-input.component.css'],
})
export class MessageInputComponent{

    private defaultMessageInput: string | null = null;

    @Output()
    private sendMessage: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    public submitChatMessage(message: string) {
        this.defaultMessageInput = '';
        if (message !== '')
            this.sendMessage.emit(message);
    }
}