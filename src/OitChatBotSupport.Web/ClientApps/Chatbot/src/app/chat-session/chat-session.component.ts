import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Message } from 'botframework-directlinejs';

import * as fromChatBot from './store/index';
import { RetrieveConnectionTokenAction, EndChatConnectionAction } from './actions/directline-connection.actions';
import { SendMessageActivityAction } from './actions/directline-activity.actions';
import { RequestAgentTransferAction, CancelAgentTransferAction } from './actions/agent-transfer.actions';
import { TransferRequest, CancelRequest, SimpleMessage } from './models';

/**
 * The root container component for the chat window
 *
 * Coordinates chat functionality by dispatching actions when events are emitted from child components, and
 *
 * listening for changes in the store and reflecting that changes by passing the data to child compoennts
 */
@Component({
    selector: 'chat-session',
    template: `
    <div class="container-fluid">
        <div class="chat-window row">
                <chat-header-panel (transferRequest)="onTransferRequest()"></chat-header-panel>
                <message-list [messageActivities]=" messageActivities$ | async "></message-list>
                <input-bar (messageSubmit)="onMessageSubmitted($event)"></input-bar>
        </div>
    </div>`,
    styles: [`
    .chat-window {
        min-width: 100%;
        min-height: 100%;
        background-color: #c7bebe;
    }
    .container-fluid{
        padding: 0;
    }
    `
    ]
})
export class ChatSessionComponent implements OnInit, OnDestroy{
    /**
     * Local references for chat session data
     */
    private messageActivities$: Observable<Message[]>;
    private currentThreadId: string;
    private connected: boolean;
    private disconnectActivity$: Observable<boolean>;
    private requestPending: boolean = false;
    private lastStudentMessage: string|undefined;

    constructor(private store: Store<fromChatBot.State>) {
        this.messageActivities$ = store.select(fromChatBot.getMessages);
        this.disconnectActivity$ = store.select(fromChatBot.getDisconnectActivity);
    }

    /**
     * When the component is created, make request for chat token, assign store selectors to track chat session data
     */
    ngOnInit() {
        this.store.dispatch(new RetrieveConnectionTokenAction());
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

    /**
     * When component is destroyed, send message to end chat connection
     */
    ngOnDestroy() {
        this.store.dispatch(new CancelAgentTransferAction(
            {
                conversationId: this.currentThreadId
            } as CancelRequest
        ));
    }

    /**
     * Event handler  to dispatch message action to store
     *
     * @param {string} message the message text
     */
    onMessageSubmitted(message: string): void {
        if (message !== '' && this.currentThreadId !== '') {
            this.store.dispatch(new SendMessageActivityAction(
            {
                text: message,
                conversationId: this.currentThreadId
            } as SimpleMessage));
        }
    }

    /**
     * Event handler to send request for agent transfer
     */
    onTransferRequest(): void {
        if (!this.requestPending) {
            this.store.dispatch(new RequestAgentTransferAction(
            {
                botHandle: 'AskRowdy',
                conversationId: this.currentThreadId,
                lastMessage: this.lastStudentMessage
            } as TransferRequest));
        }
    }
}