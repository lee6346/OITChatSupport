import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import * as Rx from 'rxjs/Rx';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';

import { ChatDisplayComponent } from './chatdisplay/chat-display.component';
import { InsertWindowDirective } from './directives/insert-window.directive';

@Component({
    selector: 'live-support',
    templateUrl: './live-support.component.html',
    styleUrls: ['./live-support.component.css'],

    entryComponents: [ChatDisplayComponent],
})
export class LiveSupportComponent implements OnInit, OnDestroy {

    @ViewChild(InsertWindowDirective) windowAnchor: InsertWindowDirective;

    private ngUnsubscribe: Rx.Subject<void> = new Rx.Subject<void>();

    private userName: string = 'agent';
    private clickedPending: boolean = true;

    constructor(/*private ws: WebsocketService*/) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    public createChannelDisplay(channel: Channel) {
        console.log(channel);
        this.windowAnchor.createChatWindow(channel['conversationId'], 'watch', this.userName, ChatDisplayComponent);
    }

    public createRequestDisplay(request: LiveRequest) {
        console.log(request);
        this.windowAnchor.createChatWindow(request['conv_id'], 'chat', this.userName, ChatDisplayComponent);
    }

    public changeToPending() {
        this.clickedPending = true;
    }

    public changeToChannels() {
        this.clickedPending = false;
    }

}