import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { Message } from 'botframework-directlinejs';


/**
 * The message component that renders individual chat messages in a bubble
 */
@Component({
    selector: 'message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {

    /**
     * The message object containing sender, text, timestamp
     */
    @Input()
    messageActivity: Message;

    constructor() { }

    /**
     * Renders message bubble layout by the sender
     *
     * @param {string} id The ID of the message sender
     */
    bubbleProperties(id: string) {
        if (id.toLowerCase() === 'student') {
            return {
                'host-bubble': true
            };
        }
        else {
            return {
                'remote-bubble': true
            };
        }
    }

    /**
     * Renders message alignment layout by the sender
     *
     * @param {string} id The ID of the message sender
     */
    wrapperAlignProperties(id: string) {
        if (id.toLowerCase() === 'student') {
            return {
                'align-wrapper-right': true
            };
        }
        else {
            return {
                'align-wrapper-left': true
            };
        }
    }
}