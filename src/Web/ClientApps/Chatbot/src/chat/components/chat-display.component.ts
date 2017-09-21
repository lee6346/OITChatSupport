import { Component, OnInit, OnDestroy, EventEmitter, Output, Inject } from '@angular/core';
import { DirectLine, Activity, Message, Conversation } from 'botframework-directlinejs';

import { DirectLineService } from '../services/direct-line.service';
import { LiveRequestService } from '../services/live-request.service';
import { CHAT_MESSAGE_CONFIG, ChatMsgConfig } from '../../chatbot-config.module';

import * as Rx from 'rxjs/Rx';

@Component({
    selector: 'chat-display',
    templateUrl: './chat-display.component.html',
    styleUrls: ['./chat-display.component.css'],
})
export class ChatDisplayComponent implements OnInit, OnDestroy {

    @Output()
    removeWindow: EventEmitter<boolean> = new EventEmitter<boolean>();

    private activityMessages: Activity[] = [];
    private user: string = 'student';
    private defaultTrigger: string | null = null;


    private directLine: DirectLine;
    private conversation: Conversation;

    private notConnected: boolean = true;
    private agentConnected: boolean = false;

    private ngUnsubscribe: Rx.Subject<void> = new Rx.Subject<void>();

    constructor(
        @Inject(CHAT_MESSAGE_CONFIG) private chatMsgConfig: ChatMsgConfig,
        private directLineService: DirectLineService,
        private liveRequestService: LiveRequestService
    ) { }

    ngOnInit() { }

    ngOnDestroy() { }


    public submitMessage(message: string) {
        this.defaultTrigger = '';
        if (message !== '') {
            this.directLineService.
        }
    }

    public closeWindow(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    public makeLiveRequest() { }

}