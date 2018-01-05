import { Component, Input, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef} from '@angular/core';

import { Activity } from 'botframework-directlinejs';
@Component({
    selector: 'chat-message-list',
    templateUrl: './chat-message-list.component.html',
    styleUrls: ['./chat-message-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageListComponent implements OnInit {

    @Input()
    chatMessages: Activity[];

    @Input()
    textFilter: string;

    @ViewChild('scrollContainer')
    chatScrollContainer: ElementRef;

    constructor() { }

    ngOnInit() {
        this.scrollToBottom();
    }

    onNewMessageReceived() {
        this.scrollToBottom();
    }

    scrollToBottom(): void {
        this.chatScrollContainer.nativeElement.scrollTop =
            this.chatScrollContainer.nativeElement.scrollHeight;
    }

    scrollToTop(): void {
        this.chatScrollContainer.nativeElement.scrollTop = 0;
    }

    textAligner(sender: string): any {
        if (sender.toLowerCase() === 'student') {
            return {
                'align-window-left': true,
            };
        }
        else return {
            'align-window-right': true,
        };
    }
}