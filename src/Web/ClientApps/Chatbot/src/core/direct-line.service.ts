import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as fromChatBot from '../chat-bot/store/chat-bot.actions';
import * as chatBotReduc from '../chat-bot/store/chat-bot.reducer';
import { DirectLine, Conversation, Activity } from 'botframework-directlinejs';
import { Observable, Subject } from 'rxjs/Rx';

import { SimpleMessage } from '../chat-bot/models';
import { environment } from '../../environments/environment';

@Injectable()
export class DirectLineService {

    private directLineSocket: DirectLine;
    private connected: boolean = false;
    private filterPredicate: string = 'AskRowdy';

    private directLineUnsubscribe: Subject<void> = new Subject<void>();

    constructor(
        private http: HttpClient,
        private store: Store<chatBotReduc.State>
    ) { }

    getToken$(botHandle: string): Observable<Conversation> {
        return this.http.get<Conversation>(
            environment.baseWebUrl +
            environment.chatToken +
            '/' + botHandle);
    }

    startDirectLineSession(conversation: Conversation): string {
        console.log('conversation id: ' + conversation.conversationId + ', token: ' + conversation.token + ', streamURL: ' + conversation.streamUrl);
        if (this.connected === false) {
            this.connected = true;
            this.directLineSocket = new DirectLine({
                token: conversation.token,
                webSocket: true,
            });
            this.directLineSocket.activity$.filter((activity: Activity) => activity.from.id !== 'student').takeUntil(this.directLineUnsubscribe)
                .subscribe(
                (activity: Activity) => {
                    this.connected = true;
                    console.log('conversation id: ' + conversation.conversationId + ', token: ' + conversation.token + ', streamURL: ' + conversation.streamUrl);
                    this.store.dispatch(new fromChatBot
                        .MessageActivityReceivedAction(activity));
                },
                (err: any) => console.log('error'),
                () => console.log('complete')
            );
        }
        return conversation.conversationId;
    }

    postMessage(message: SimpleMessage): Activity {
        let activity = this.normalizeToActivityMessage(message);
        this.directLineSocket
            .postActivity(activity).subscribe(
            next => console.log('success'),
            (err: any) => console.log('error'),
            () => console.log('completed')
        );
        return activity;
    }

    endConnection(conversationId: string): void{
        this.directLineSocket.postActivity({
            conversation: { id: conversationId },
            from: { id: 'student' },
            type: 'message',
            inputHint: 'disconnect',
            text: 'student has disconnected'
        }).subscribe(next => console.log('disconnect activity sent: ' + next));
        this.connected = false;
        this.directLineUnsubscribe.next();
        this.directLineSocket.end();
    }

    normalizeToActivityMessage(message: SimpleMessage): Activity {
        return {
            conversation: {
                id: message.conversationId
            }, from: { id: 'student' },
            type: 'message',
            text: message.text
        } as Activity;
    }

}