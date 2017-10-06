import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'group-chat-input',
    templateUrl: './group-chat-input.component.html',
    styleUrls: ['./group-chat-input.component.css'],
})
export class GroupChatInputComponent {


    private defaultMessageInput: string | null = null;

    @Output()
    private sendChatMessage: EventEmitter<string> = new EventEmitter<string>(); 

    constructor() { }

    public submitChatMessage(message: string) {
        this.defaultMessageInput = '';
        if (message !== '')
            this.sendChatMessage.emit(message);
    }

}