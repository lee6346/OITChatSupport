import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as fromChatBot from '../store/chat-bot.actions';
import * as chatBotReduc from '../store/chat-bot.reducer';
import { DirectLine, Conversation, Activity } from 'botframework-directlinejs';
import { Observable } from 'rxjs/Rx';

import { SimpleMessage } from '../model';
import { environment } from '../../environments/environment';

@Injectable()
export class DirectLineService {

    private directLineSocket: DirectLine;
    private connected: boolean = false;

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
        if (this.connected === false) {
            this.directLineSocket = new DirectLine(conversation);
            this.directLineSocket.activity$
                .subscribe(
                (activity: Activity) => {
                    this.connected = true;
                    this.store.dispatch(new fromChatBot
                        .DirectLineActivityReceivedAction(activity));
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

    endConnection(): void{
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