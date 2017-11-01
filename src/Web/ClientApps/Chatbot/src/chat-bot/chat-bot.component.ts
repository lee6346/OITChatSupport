import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromChatBot from './store/index';
import * as chatBotActions from './store/chat-bot.actions';
import { Observable } from 'rxjs/Rx';
import { Message } from 'botframework-directlinejs';
import { LiveRequest, SimpleMessage } from './models';

@Component({
    selector: 'chat-bot',
    templateUrl: './chat-bot.component.html',
    styleUrls: ['./chat-bot.component.css'],
})
export class ChatBotComponent implements OnInit, OnDestroy {

    private user: string = 'student';

    @Output()
    disconnectSession: EventEmitter<void> = new EventEmitter<void>();

    private messageActivities$: Observable<Message[]>;
    private currentThreadId: string = '';
    private notConnected: boolean = true;

    private recentMessageActivities: Message[];

    constructor(
        private store: Store<fromChatBot.State>
    ) {
        this.messageActivities$ = store.select(fromChatBot.getMessageLog).map(item => item.toArray());
        store.select(fromChatBot.getLastMessageSet).map(item => item.toArray())
        .subscribe(
            set => {
                this.recentMessageActivities = set;
                console.log('message set :' + this.recentMessageActivities);
            }
        );
        store.select(fromChatBot.getCurrentBotThread).subscribe(item => {
            if (item !== '') {
                this.notConnected = false;
                this.currentThreadId = item;
            }
        });
    }

    ngOnInit() {
        this.store.dispatch(new chatBotActions.RetrieveBotTokenAction('AskRowdy'));
    }

    ngOnDestroy() {
    }

    
    onMessageSubmitted(message: string): void {
        if (message !== '' && this.currentThreadId !== '') {
            this.store.dispatch(new chatBotActions.SendMessageActivityAction(
                {
                    text: message,
                    conversationId: this.currentThreadId
                } as SimpleMessage
            ));
        }
    }

    onExitRequested(): void {
        this.store.dispatch(new chatBotActions.EndChatSessionAction(this.currentThreadId));
        this.disconnectSession.emit();
    }

    onTransferRequested(): void {
        this.store.dispatch(new chatBotActions.RequestLiveSupportAction(
            {
                botHandle: 'AskRowdy',
                conversationId: this.currentThreadId,
                user: this.user,
                activitySet: this.recentMessageActivities
            } as LiveRequest));
    }

}