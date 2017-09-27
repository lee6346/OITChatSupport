import { Component, OnInit, OnDestroy, EventEmitter, Output, Inject } from '@angular/core';
import { DirectLine, Activity, Message, Conversation } from 'botframework-directlinejs';

import { DirectLineService } from '../services/direct-line.service';
import { LiveRequestService } from '../services/live-request.service';
import { CHAT_MESSAGE_CONFIG, ChatMsgConfig } from '../../chatbot-config.module';

import * as Rx from 'rxjs/Rx';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {

    @Output()
    removeWindow: EventEmitter<boolean> = new EventEmitter<boolean>();

    private activityMessages: Activity[] = [];
    private user: string = 'user';
    private sender: string = 'AskRowdy';
    private defaultTrigger: string | null = null;


    private directLine: DirectLine;
    private conversation: Conversation;

    private notConnected: boolean = true;
    private agentConnected: boolean = false;

    private ngUnsubscribe: Rx.Subject<void> = new Rx.Subject<void>();
    private botUnsubscribe: Rx.Subject<void> = new Rx.Subject<void>();

    private messageObservableActivity$: Rx.Observable<Activity>;


    constructor(
        @Inject(CHAT_MESSAGE_CONFIG) private chatMsgConfig: ChatMsgConfig,
        private directLineService: DirectLineService,
        private liveRequestService: LiveRequestService
    ) { }

    ngOnInit() {
        this.directLineService.getToken$().subscribe(
            result => {
                this.conversation = result;
                this.directLine = this.directLineService.connectToDirectLine(this.conversation);
                this.messageObservableActivity$ = this.directLine.activity$.share();
                this.notConnected = false;
                this.messageObservableActivity$
                    .filter(msg => msg.type === 'message' && msg.from.id === this.sender)
                    .takeUntil(this.botUnsubscribe).subscribe(res => this.activityMessages.push(res));
            });

    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        this.botUnsubscribe.next();
        this.botUnsubscribe.complete();
    }


    public submitMessage(message: string) {
        this.defaultTrigger = '';
        if (message !== '') {
            let act = { from: { id: this.user, name: this.user }, type: 'message', text: message } as Activity;
            this.directLineService.sendMessage$(this.directLine, message).subscribe(
                next => this.activityMessages.push(act),
                err => console.log("failed to send message"),
                () => console.log("done")
            );
        }
    }

    public closeWindow(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    public makeLiveRequest() { }

    public msgAlignment(id: string) {
        if (id === this.user) {
            return {
                'align-window-right': true,
            };
        }
        else return {
            'align-window-left': true,
        };
    }
    public bubbleProperties(id: string) {
        if (id === this.user) {
            return {
                'align-window-right': true,
                'host-bubble': true,
            };
        }
        else if (id === 'closeConnection') {
            return {
                'align-window-right': true,
                'default-bubble': true,
            }
        }
        else return {
            'align-window-left': true,
            'remote-bubble': true,
        };
    }

    public minimizeWindow(){}

}