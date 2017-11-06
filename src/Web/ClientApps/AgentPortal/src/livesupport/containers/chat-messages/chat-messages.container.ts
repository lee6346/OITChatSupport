import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Activity } from 'botframework-directlinejs';
import { ChatPayload } from '../../models';
import * as fromLiveSupport from '../../reducers/index';
import { SendMessageActivityAction, FilterMessageTextAction } from '../../actions/chat-message.actions';

@Component({
    selector: 'chat-messages',
    templateUrl: './chat-messages.container.html',
    styleUrls: ['./chat-messages.container.css'],
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