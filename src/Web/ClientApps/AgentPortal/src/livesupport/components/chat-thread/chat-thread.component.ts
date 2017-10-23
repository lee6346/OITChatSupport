import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import {  DirectLineThreadVm } from '../../viewmodels';

@Component({
    selector: 'chat-thread',
    templateUrl: './chat-thread.component.html',
    styleUrls: ['./chat-thread.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatThreadComponent {

    @Input()
    thread: DirectLineThreadVm;

    constructor() { }
}