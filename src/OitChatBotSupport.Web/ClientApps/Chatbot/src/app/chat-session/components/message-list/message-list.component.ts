import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { Message } from 'botframework-directlinejs';


/**
 * The message list component that renders the list of messages in the chat window
 */
@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent {
    /**
     * Array holding the chat messages in order received
     */
    @Input()
    messageActivities: Message[];

    constructor() { }

    /**
     * Renders message list layout by sender
     * @param {string} id Sender ID of message
     */
    public msgAlignment(id: string) {
        if (id === 'student') {
            return {
                'align-window-right': true,
            };
        }
        else return {
            'align-window-left': true,
        };
    }
}