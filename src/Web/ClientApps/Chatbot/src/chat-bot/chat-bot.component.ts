import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromChatBot from './store/index';
import { RetrieveBotTokenAction, EndChatSessionAction } from './actions/directline-connection.actions';
import { SendMessageActivityAction } from './actions/directline-activity.actions';
import { RequestLiveSupportAction, CancelLiveSupportAction } from './actions/live-request.actions';
import { Observable } from 'rxjs/Rx';
import { Message } from 'botframework-directlinejs';
import { LiveRequest, LiveRequestStatus, SimpleMessage } from './models';

@Component({
    selector: 'chat-bot',
    template: `
        <div class="chat-window">
            <chat-header-panel (exitRequest)="onExitRequest()"
                               (transferRequest)="onTransferRequest()"></chat-header-panel>
            <message-list [messageActivities]=" messageActivities$ | async "></message-list>
            <input-bar (messageSubmit)="onMessageSubmitted($event)"></input-bar>
        </div>
    `,
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
    }
        `
    ]
})
export class ChatBotComponent implements OnInit, OnDestroy{

    @Output()
    private disconnectSession: EventEmitter<void> = new EventEmitter<void>();
    private messageActivities$: Observable<Message[]>;
    private currentThreadId: string;
    private connectionStatus: boolean;
    private disconnectActivity$: Observable<boolean>;
    private requestStatus: LiveRequestStatus = 'none';
    private user: string = 'student';
    private lastStudentMessage: string|undefined;

    constructor(
        private store: Store<fromChatBot.State>
    ) {
        this.messageActivities$ = store.select(fromChatBot.getMessageLog).map(item => item.toArray());
        this.disconnectActivity$ = store.select(fromChatBot.getDisconnectActivity);
        store.select(fromChatBot.getCurrentBotThread).subscribe(thread => this.currentThreadId = thread);
        store.select(fromChatBot.getConnectionState).subscribe(connection => this.connectionStatus = connection);
        store.select(fromChatBot.getLiveRequestStatus).subscribe(status => this.requestStatus = status);
        store.select(fromChatBot.getLastStudentMessage).subscribe(msg => {
            this.lastStudentMessage = msg;
            console.log(msg);
        });
    }

    ngOnInit() {
        this.store.dispatch(new RetrieveBotTokenAction('AskRowdy'));
    }
    ngOnDestroy() {
        this.store.dispatch(new EndChatSessionAction(this.currentThreadId));
    }
    
    onMessageSubmitted(message: string): void {
        if (message !== '' && this.currentThreadId !== '') {
            this.store.dispatch(new SendMessageActivityAction(
                {
                    text: message,
                    conversationId: this.currentThreadId
                } as SimpleMessage
            ));
        }
    }

    onExitRequest(): void {
        this.disconnectSession.emit();
    }

    onTransferRequest(): void {
        if (this.requestStatus === 'none') {
            this.store.dispatch(new RequestLiveSupportAction(
            {
                botHandle: 'AskRowdy',
                conversationId: this.currentThreadId,
                user: this.user,
                lastMessage: this.lastStudentMessage
            } as LiveRequest));
        }
    }
}