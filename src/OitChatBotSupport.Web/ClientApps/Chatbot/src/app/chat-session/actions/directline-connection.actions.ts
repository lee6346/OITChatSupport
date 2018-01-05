import { Action } from '@ngrx/store';
import { Activity } from 'botframework-directlinejs';

import { SimpleMessage } from '../models';

/**
 * constants represnting direct line connection actions
 */
export const RETRIEVE_CONNECTION_TOKEN = '[Connection] RETRIEVE_CONNECTION_TOKEN';
export const CONNECTION_TOKEN_RETRIEVED = '[Connection] CONNECTION_TOKEN_RETRIEVED';
export const END_CHAT_CONNECTION = '[Connection] END_CHAT_CONNECTION';
export const CHAT_CONNECTION_ENDED = '[Connection] CHAT_CONNECTION_ENDED';
export const CHANGE_CONNECTION_SUBSCRIBER = '[Connection] CHANGE_CHAT_SUBSCRIBER';

/**
 * Action to retrieve a token
 */
export class RetrieveConnectionTokenAction implements Action {
    readonly type = RETRIEVE_CONNECTION_TOKEN;
    constructor() { }
}

/**
 * Action to notify token was retrieved
 */
export class ConnectionTokenRetrievedAction implements Action {
    readonly type = CONNECTION_TOKEN_RETRIEVED;
    constructor(public conversationId: string) { }
}

/**
 * Action to end a chat connection
 */
export class EndChatConnectionAction implements Action {
    readonly type = END_CHAT_CONNECTION;
    constructor(public conversationId: string) { }
}

/**
 * Action to end a chat connection
 */
export class ChatConnectionEndedAction implements Action {
    readonly type = CHAT_CONNECTION_ENDED;
    constructor(public conversationId: string) { }
}

/**
 * Action to change the chat participant to listen to
 */
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