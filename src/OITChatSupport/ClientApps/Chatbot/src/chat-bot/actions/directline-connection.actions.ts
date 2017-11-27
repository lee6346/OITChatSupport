import { Action } from '@ngrx/store';
import { SimpleMessage } from '../models';
import { Activity } from 'botframework-directlinejs';

export const RETRIEVE_CONNECTION_TOKEN = '[Connection] RETRIEVE_CONNECTION_TOKEN';
export const CONNECTION_TOKEN_RETRIEVED = '[Connection] CONNECTION_TOKEN_RETRIEVED';
export const END_CHAT_CONNECTION = '[Connection] END_CHAT_CONNECTION';
export const CHAT_CONNECTION_ENDED = '[Connection] CHAT_CONNECTION_ENDED';
export const CHANGE_CONNECTION_SUBSCRIBER = '[Connection] CHANGE_CHAT_SUBSCRIBER';

export class RetrieveConnectionTokenAction implements Action {
    readonly type = RETRIEVE_CONNECTION_TOKEN;
    constructor(public botHandle: string) { }
}

export class ConnectionTokenRetrievedAction implements Action {
    readonly type = CONNECTION_TOKEN_RETRIEVED;
    constructor(public conversationId: string) { }
}

export class EndChatConnectionAction implements Action {
    readonly type = END_CHAT_CONNECTION;
    constructor(public conversationId: string) { }
}

export class ChatConnectionEndedAction implements Action {
    readonly type = CHAT_CONNECTION_ENDED;
    constructor(public conversationId: string) { }
}

export class ChangeConnectionSubscriberAction implements Action {
    readonly type = CHANGE_CONNECTION_SUBSCRIBER;
    constructor(public id: string) { }
}

export type Actions
    = RetrieveConnectionTokenAction
    | ConnectionTokenRetrievedAction
    | EndChatConnectionAction
    | ChatConnectionEndedAction
    | ChangeConnectionSubscriberAction;