import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';

import { DirectLine, Activity, Message, Conversation } from 'botframework-directlinejs';


import * as Rx from 'rxjs/Rx';

@Component({
    selector: 'chat-display',
    templateUrl: './chat-display.component.html',
    styleUrls: ['./chat-display.component.css'],
})
export class ChatDisplayComponent implements OnInit, OnDestroy {

    @Output()
    removeWindow: EventEmitter<boolean> = new EventEmitter<boolean>();

    private directLineMessages: Activity[] = [];
    private userName: string = 'student';

    private directLine: DirectLine;
    private conversation: Conversation;

    private notConnected: boolean = true;
    private agentConnected: boolean = false;

    private ngUnsubscribe: Rx.Subject<void> = new Rx.Subject<void>();

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }

    public closeWindow(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    public makeLiveRequest() { }

}