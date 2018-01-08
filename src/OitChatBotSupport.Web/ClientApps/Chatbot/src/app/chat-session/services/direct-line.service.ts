import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { State } from '../store/index';
import { Observable } from 'rxjs/Rx';
import { DirectLine, Conversation, Activity, Message } from 'botframework-directlinejs';

import { MessageActivityReceivedAction } from '../actions/direct-line.actions';
import { SimpleMessage } from '../models';


@Injectable()
export class DirectLineService {

    private directLineSocket: DirectLine;

    private chatTokenApi: string = 'http://localhost:5000/api/chattoken/newsession';
    private postMessageApi: string = 'https://directline.botframework.com/v3/directline/conversations/';

    constructor(
        private http: HttpClient,
        private store: Store<State>
    ) { }

    getToken$(): Observable<Conversation> {
        return this.http.get<Conversation>(this.chatTokenApi);
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

    private normalizeToActivityMessage(message: SimpleMessage): Message {
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