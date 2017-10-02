import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'group-chat-input',
    templateUrl: './group-chat-input.component.html',
    styleUrls: ['./group-chat-input.component.css'],
})
export class GroupChatInputComponent implements OnInit, OnDestroy{


    private defaultMessageInput: string | null = null;
    @Output()
    private sendChatMessage: EventEmitter<string> = new EventEmitter<string>(); 

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() {}

    public submitChatMessage(message: string) {
        this.defaultMessageInput = '';
        if (message !== '')
            this.sendChatMessage.emit(message);
    }

}