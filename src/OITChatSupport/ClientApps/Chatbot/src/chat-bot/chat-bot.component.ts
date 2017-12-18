import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Message } from 'botframework-directlinejs';

import * as fromChatBot from './store/index';
import { RetrieveConnectionTokenAction, EndChatConnectionAction } from './actions/directline-connection.actions';
import { SendMessageActivityAction } from './actions/directline-activity.actions';
import { RequestAgentTransferAction } from './actions/agent-transfer.actions';
import { TransferRequest, SimpleMessage } from './models';

@Component({
    selector: 'chat-bot',
    template: `
        <div class="chat-window">
            <chat-header-panel (exitRequest)="onExitRequest()"
                               (transferRequest)="onTransferRequest()"></chat-header-panel>
            <message-list [messageActivities]=" messageActivities$ | async "></message-list>
            <input-bar (messageSubmit)="onMessageSubmitted($event)"></input-bar>
        </div>`,
    styles: [`
    .chat-window {
        width: 55%;
        height: 100%;
        border-radius: 7px;
        background-color: #c7bebe;
        margin-top: 15px;
        -webkit-box-shadow: 1px 2px 2px #0c2340;
        -moz-box-shadow: 1px 2px 2px #0c2340;
        box-shadow: 1px 2px 2px #0c2340;
    }`
    ]
})
export class ChatBotComponent implements OnInit, OnDestroy{

    @Output()
    private disconnectSession: EventEmitter<void> = new EventEmitter<void>();

    private messageActivities$: Observable<Message[]>;
    private currentThreadId: string;
    private connected: boolean;
    private disconnectActivity$: Observable<boolean>;
    private requestPending: boolean = false;
    private user: string = 'student';
    private lastStudentMessage: string|undefined;

    constructor(private store: Store<fromChatBot.State>) {
        this.messageActivities$ = store.select(fromChatBot.getMessages);
        this.disconnectActivity$ = store.select(fromChatBot.getDisconnectActivity);
    }

    ngOnInit() {
        this.store.dispatch(new RetrieveConnectionTokenAction('AskRowdy'));
        this.store.select(fromChatBot.getChatStatusEntity).subscribe(
            status => {
                this.currentThreadId = status.threadId;
                this.connected = status.connected;
                this.requestPending = status.requestPending;
                console.log('pending status: ' + this.requestPending);
            }
        );
        this.store.select(fromChatBot.getLastStudentMessage).subscribe(msg => this.lastStudentMessage = msg);
    }

    ngOnDestroy() {
        this.store.dispatch(new EndChatConnectionAction(this.currentThreadId));
    }
    
    onMessageSubmitted(message: string): void {
        if (message !== '' && this.currentThreadId !== '') {
            this.store.dispatch(new SendMessageActivityAction(
            {
                text: message,
                conversationId: this.currentThreadId
            } as SimpleMessage));
        }
    }

    onExitRequest(): void {
        this.disconnectSession.emit();
    }

    onTransferRequest(): void {
        if (!this.requestPending) {
            this.store.dispatch(new RequestAgentTransferAction(
            {
                botHandle: 'AskRowdy',
                conversationId: this.currentThreadId,
                user: this.user,
                lastMessage: this.lastStudentMessage
            } as TransferRequest));
        }
    }
}