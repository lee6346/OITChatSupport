import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Activity } from 'botframework-directlinejs';
import { ChatPayload } from '../models';
import * as fromLiveSupport from '../reducers/index';
import { SendMessageActivityAction, FilterMessageTextAction } from '../actions/chat-message.actions';

@Component({
    selector: 'chat-messages',
    template: `
        <chat-message-header></chat-message-header>
        <div class="chat-display">
            <div class="chat-window">
                <chat-message-list 
                                   [chatMessages]="currentThreadMessages$ | async"
                                   [textFilter]="textFilter$ | async"></chat-message-list>
            </div>
        </div>
        <div class="chat-filter-bar">
            <chat-message-filter (textFilter)="onTextFilter($event)"></chat-message-filter>
        </div>
        <div class="chat-input">
            <input-bar (messageSubmit)="onMessageSubmitted($event)"></input-bar>
        </div>
    `,
    styles: [`
        .chat-display {
            height: 70%;
        }
        .chat-window {
            height: 100%;
            padding: 10px 10px 10px 10px;
        }
        .chat-filter-bar{
            height: 5%;
        }
        .chat-input {
            padding-top: 10px;
            height: 25%;
        }
    `]
})
export class ChatMessagesContainer implements OnInit {

    private textFilteredMessages$: Observable<Activity[]>;
    private textFilter$: Observable<string>;
    private currentThreadMessages$: Observable<Activity[]>;
    private currentThreadId: string;

    constructor(private store: Store<fromLiveSupport.State>) {
        this.currentThreadMessages$ = store.select(fromLiveSupport.getMessageListBySelectedThread);
        this.textFilteredMessages$ = store.select(fromLiveSupport.getMessagesByTextQuery);
        this.textFilter$ = store.select(fromLiveSupport.getMessageFilterText);
    }

    ngOnInit() {
        this.subscribeToCurrentThreadId();
    }

    subscribeToCurrentThreadId() {
        this.store.select(fromLiveSupport.getSelectedThreadId)
            .subscribe(
            (threadId: string) => this.currentThreadId = threadId,
            (err: any) => console.log('ChatMessageContainer: error reading current thread Id')
        );
    }

    onMessageSubmitted(message: string): void {
        if (typeof this.currentThreadId !== 'undefined') {
            let payload: ChatPayload = {
                senderId: 'jvr632',
                threadId: this.currentThreadId,
                text: message
            };
            this.store.dispatch(new SendMessageActivityAction(payload));
        }
    }

    onTextFilter(text: string): void {
        this.store.dispatch(new FilterMessageTextAction(text));
    }
}