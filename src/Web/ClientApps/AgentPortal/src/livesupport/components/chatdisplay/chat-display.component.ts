import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Activity } from 'botframework-directlinejs';

@Component({
    selector: 'chat-display',
    templateUrl: './chat-display.component.html',
    styleUrls: ['./chat-display.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatDisplayComponent implements OnInit{

    @Input()
    sessionMessages: Activity[];

    constructor() { }

    ngOnInit() {
        console.log('lots of activityes ' + this.sessionMessages);
    }
}