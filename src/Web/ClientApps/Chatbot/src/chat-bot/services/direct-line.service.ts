import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { State } from '../store/index';
import { Observable } from 'rxjs/Rx';
import { DirectLine, Conversation, Activity, Message } from 'botframework-directlinejs';

import { MessageActivityReceivedAction } from '../actions/directline-activity.actions';
import { SimpleMessage } from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class DirectLineService {

    private directLineSocket: DirectLine;

    constructor(
        private http: HttpClient,
        private store: Store<State>
    ) { }

    getToken$(botHandle: string): Observable<Conversation> {
        return this.http.get<Conversation>(
            environment.baseWebUrl +
            environment.chatToken +
            '/' + botHandle);
    }

    startDirectLineSession(conversation: Conversation): string {
            this.directLineSocket = new DirectLine({
                token: conversation.token,
                webSocket: true,
            });
            this.directLineSocket.activity$.filter((activity: Activity) => activity.from.id !== 'student')
                .subscribe(
                (activity: Activity) => {
                    if(activity.type === 'message')
                        this.store.dispatch(new MessageActivityReceivedAction(activity));
                },
                (err: any) => { }
            );
        return conversation.conversationId;
    }

    postMessage(message: SimpleMessage): Message {
        let messageActivity = this.normalizeToActivityMessage(message);
        this.directLineSocket
            .postActivity(messageActivity).subscribe(
            next => { },
            (err: any) => { }
        );
        return messageActivity;
    }

    endConnection(conversationId: string): void{
        this.directLineSocket.postActivity({
            conversation: { id: conversationId },
            from: { id: 'student' },
            type: 'message',
            inputHint: 'disconnect',
            text: 'student has disconnected'
        }).subscribe(
            next => { },
            (err: any) => { }
        );
        this.directLineSocket.end();
    }

    normalizeToActivityMessage(message: SimpleMessage): Message {
        return {
            conversation: {
                id: message.conversationId
            }, from: { id: 'student' },
            type: 'message',
            text: message.text,
            timestamp: new Date(Date.now()).toUTCString()
        } as Message;
    }
}