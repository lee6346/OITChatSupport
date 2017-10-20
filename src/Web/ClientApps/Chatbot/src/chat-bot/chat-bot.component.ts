import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as chatBot from '../store/index';
import * as chatBotActions from '../store/chat-bot.actions';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { DirectLineMessage, LiveRequest, SimpleMessage } from '../model';
import { List } from 'immutable';

@Component({
    selector: 'chat-bot',
    templateUrl: './chat-bot.component.html',
    styleUrls: ['./chat-bot.component.css'],
})
export class ChatBotComponent implements OnInit, OnDestroy {

    private user: string = 'student';

    @Output()
    closeWindowSignal: EventEmitter<void> = new EventEmitter<void>();

    private activityMessages$: Observable<DirectLineMessage[]>;
    private targetMessageFilter$: Observable<string>;

    private directLineMessages: DirectLineMessage[];
    private targetListener: string;
    private currentThreadId: string;

    constructor(
        private store: Store<chatBot.State>
    ) {
        store.select(chatBot.getMessageLog).map((item: List<DirectLineMessage>) => item.toArray()).subscribe((messages: DirectLineMessage[]) => this.directLineMessages = messages);
        store.select(chatBot.getTargetListener).map((targetId: string) => targetId).subscribe((targetId: string) => this.targetListener = targetId);
        store.select(chatBot.getCurrentBotThread).map((threadId: string) => threadId).subscribe((threadId: string) => this.currentThreadId = threadId);
    }

    ngOnInit() {
        this.store.dispatch(new chatBotActions.GetBotTokenAction('AskRowdy'));
    }

    ngOnDestroy() {
        this.store.dispatch(
            new chatBotActions
                .DirectLineDisconnectAction(
                this.currentThreadId));
    }

    
    submitMessage(message: string): void {
        this.store.dispatch(
            new chatBotActions.PostDirectLineActivityAction(
                { text: message, conversationId: this.currentThreadId } as SimpleMessage
            ));
    }

    public closeWindow(): void {
        this.closeWindowSignal.emit();
    }

    public makeLiveRequest() {
        this.store
            .dispatch(new chatBotActions
                .RequestLiveSupportAction(
            {
                botHandle: 'AskRowdy',
                conversationId: this.currentThreadId,
                user: 'student'
            } as LiveRequest));
    }

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