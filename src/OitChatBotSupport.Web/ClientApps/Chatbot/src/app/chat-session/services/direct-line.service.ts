import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { State } from '../store/index';
import { Observable } from 'rxjs/Rx';
import { DirectLine, Conversation, Activity, Message } from 'botframework-directlinejs';

import { MessageActivityReceivedAction } from '../actions/directline-activity.actions';
import { SimpleMessage } from '../models';


/**
 * Service for communicating with the chat bot through the direct line channel
 *
 * See {@link } for the typescript/JSON data types used
 *
 * See {@link } from microsoft documentation on Direct Line Client 3.0 API
 */
@Injectable()
export class DirectLineService {
    /**
     * The DirectLine driver used to send and
     * receive messages 
     */
    private directLineSocket: DirectLine;

    private chatTokenApi: string = 'http://localhost:5000/api/chattoken/newsession';
    private postMessageApi: string = 'https://directline.botframework.com/v3/directline/conversations/';

    constructor(
        private http: HttpClient,
        private store: Store<State>
    ) { }

    /**
     * Retrieve a conversation object defined in the Direct line client library
     *
     * which contains the token and conversation id necessary to communicate with the bot
     *
     * @returns {Observable<Conversation>} 
     */
    getToken$(): Observable<Conversation> {
        return this.http.get<Conversation>(this.chatTokenApi);
    }

    /**
     * Create a direct line connection and subscribe to messages from the chat bot
     *
     * Messages are dispatched to the store. See {@link } for store details
     *
     * @param {Conversation} conversation The Conversation object containing the token and conversation Id necessary to create a direct line client connection
     *
     * @returns {string} The conversation Id 
     */
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

    /**
     * Send an activity message to the chat bot using the direct line client connector
     *
     * @param {SimpleMessage} message A basic message model containing the conversation Id and message (normalized to a direct line message object)
     *
     * @returns {Message} The direct line message object
     */
    postMessage(message: SimpleMessage): Message {
        let messageActivity = this.normalizeToActivityMessage(message);
        this.directLineSocket
            .postActivity(messageActivity).subscribe(
            next => { },
            (err: any) => { }
        );
        return messageActivity;
    }

    /**
     * End the direct line connection
     *
     * @param {string} conversationId send an input hint to the bot to indicate end of conversation
     */
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

    /**
     * helper function to convert a simple message into the direct line compliant message structure to send it
     *
     * @param {SimpleMessage} message See {@link SimpleMessage}
     *
     * @returns {Message} The direct line message object 
     */
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