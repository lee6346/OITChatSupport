import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { Message } from 'botframework-directlinejs';

@Component({
    selector: 'message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {

    @Input()
    messageActivity: Message;

    constructor() { }

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