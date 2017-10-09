import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';

import * as Rx from 'rxjs/Rx';

import { ChatSessionComponent} from './chatsession/chat-session.component';
import { DynamicChatSessionDirective } from './directives/dynamic-chat-session.directive';

import { MessageTransferService } from '../core';

@Component({
    selector: 'live-support',
    templateUrl: './live-support.component.html',
    styleUrls: ['./live-support.component.css'],

    entryComponents: [ChatSessionComponent],
})
export class LiveSupportComponent implements OnInit, OnDestroy {

    @ViewChild(DynamicChatSessionDirective) windowAnchor: DynamicChatSessionDirective;

    private ngUnsubscribe: Rx.Subject<void> = new Rx.Subject<void>();

    @Input()
    private agentId: string;

    constructor(
        private messageTransferService: MessageTransferService
    ) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    public trackInputMessage() {
    }


    public createChatSession() { }


    public onMessageSubmitted(message: string): void {

    }

}