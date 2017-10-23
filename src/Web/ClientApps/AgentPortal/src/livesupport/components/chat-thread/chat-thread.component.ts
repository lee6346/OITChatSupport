import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import {  DirectLineThread } from '../../models';

@Component({
    selector: 'chat-thread',
    templateUrl: './chat-thread.component.html',
    styleUrls: ['./chat-thread.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatThreadComponent {

    @Input()
    thread: DirectLineThread;

    constructor() { }
}