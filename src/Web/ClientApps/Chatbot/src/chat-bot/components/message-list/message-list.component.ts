﻿import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectLineMessage } from '../../models';


@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent {

    @Input()
    chatMessages: DirectLineMessage[];

    constructor() { }

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

    public bubbleProperties(id: string) {
        if (id === 'student') {
            return {
                'align-window-right': true,
                'host-bubble': true,
            };
        }
        else {
            return {
                'align-window-left': true,
                'remote-bubble': true,
            };
        }
    }
}