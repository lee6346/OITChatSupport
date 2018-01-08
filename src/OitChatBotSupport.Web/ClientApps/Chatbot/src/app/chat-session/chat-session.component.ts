import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Message } from 'botframework-directlinejs';

import * as fromChatBot from './store/index';
import * as agentTransfer from './actions/agent-transfer.actions';
import * as directLine from './actions/direct-line.actions';
import { AgentStatus } from './store/chat-session.state';
import { TransferRequest, CancelRequest, SimpleMessage } from './models';


@Component({
    selector: 'chat-session',
    template: `
        <chat-header-panel (transferRequest)="onTransferRequest()"></chat-header-panel>
        <message-list [messageActivities]=" messageActivities$ | async "></message-list>
        <input-bar (messageSubmit)="onMessageSubmitted($event)"></input-bar>`
})
export class ChatSessionComponent implements OnInit, OnDestroy{

    private messageActivities$: Observable<Message[]>;
    private currentThreadId: string | undefined;
    private requestPending: AgentStatus;
    private lastStudentMessage: string | undefined;

    constructor(private store: Store<fromChatBot.State>) { }

    ngOnInit() {
        this.store.dispatch(new directLine.RetrieveConnectionTokenAction());
        this.messageActivities$ = this.store.select(fromChatBot.getMessages);
        this.store.select(fromChatBot.getChatSessionEntity).subscribe(
            status => {
                this.currentThreadId = status.threadId;
                this.requestPending = status.agentStatus;
            }
        );
        this.store.select(fromChatBot.getLastStudentMessage).subscribe(lastMessage =>
        {
            if (typeof (lastMessage) !== 'undefined')
                this.lastStudentMessage = lastMessage.text;
        });
    }

    ngOnDestroy() {
        this.store.dispatch(new agentTransfer.CancelAgentTransferAction(
            {
                conversationId: this.currentThreadId
            } as CancelRequest
        ));
    }

    onMessageSubmitted(message: string): void {
        if (message !== '' && typeof(this.currentThreadId) !== 'undefined') {
            this.store.dispatch(new directLine.SendMessageActivityAction(
            {
                text: message,
                conversationId: this.currentThreadId
            } as SimpleMessage));
        }
    }

    onTransferRequest(): void {
        if (this.requestPending === 'none' && typeof(this.lastStudentMessage) !== 'undefined') {
            this.store.dispatch(new agentTransfer.RequestAgentTransferAction(
            {
                botHandle: 'AskRowdy',
                conversationId: this.currentThreadId,
                lastMessage: this.lastStudentMessage
            } as TransferRequest));
        }
    }
}