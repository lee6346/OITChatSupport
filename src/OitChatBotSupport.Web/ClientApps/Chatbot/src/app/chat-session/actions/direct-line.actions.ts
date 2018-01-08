import { Action } from '@ngrx/store';
import { Activity, Message } from 'botframework-directlinejs';

import { SimpleMessage } from '../models';


export const MESSAGE_ACTIVITY_RECEIVED = '[Activity] MESSAGE_ACTIVITY_RECEIVED';
export const DISCONNECT_ACTIVITY_RECEIVED = '[Activity] DISCONNECT_ACTIVITY_RECEIVED';
export const SEND_MESSAGE_ACTIVITY = '[Activity] SEND_MESSAGE_ACTIVITY';
export const MESSAGE_ACTIVITY_SENT = '[Activity] MESSAGE_ACTIVITY_SENT';
export const RETRIEVE_CONNECTION_TOKEN = '[Connection] RETRIEVE_CONNECTION_TOKEN';
export const CONNECTION_TOKEN_RETRIEVED = '[Connection] CONNECTION_TOKEN_RETRIEVED';

export class MessageActivityReceivedAction implements Action {
    readonly type = MESSAGE_ACTIVITY_RECEIVED;
    constructor(public activity: Message) { }
}

export class DisconnectActivityReceived implements Action {
    readonly type = DISCONNECT_ACTIVITY_RECEIVED;
    constructor(public activity: Activity) { }
}

export class SendMessageActivityAction implements Action {
    readonly type = SEND_MESSAGE_ACTIVITY;
    constructor(public message: SimpleMessage) { }
}

export class MessageActivitySentAction implements Action {
    readonly type = MESSAGE_ACTIVITY_SENT;
    constructor(public activity: Message) { }
}

export class RetrieveConnectionTokenAction implements Action {
    readonly type = RETRIEVE_CONNECTION_TOKEN;
    constructor() { }
}

export class ConnectionTokenRetrievedAction implements Action {
    readonly type = CONNECTION_TOKEN_RETRIEVED;
    constructor(public conversationId: string) { }
}

export type Actions
    = DisconnectActivityReceived
    | MessageActivityReceivedAction
    | SendMessageActivityAction
    | MessageActivitySentAction
    | RetrieveConnectionTokenAction
    | ConnectionTokenRetrievedAction;