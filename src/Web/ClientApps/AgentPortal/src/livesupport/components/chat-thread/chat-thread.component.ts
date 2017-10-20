import { 
    Component, 
    Input, 
    OnInit, 
    ChangeDetectionStrategy 
    } from '@angular/core';

import {  DirectLineThread } from '../../models';

@Component({
    selector: 'chat-thread',
    templateUrl: './chat-thread.component.html',
    styleUrls: ['./chat-thread.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatThreadComponent implements OnInit{

    @Input()
    thread: DirectLineThread;

    constructor() {
    }

    ngOnInit() {
    }
}