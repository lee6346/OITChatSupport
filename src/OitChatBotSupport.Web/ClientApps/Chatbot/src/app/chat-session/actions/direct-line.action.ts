import { Action } from '@ngrx/store';
import { Activity, Message } from 'botframework-directlinejs';

import { SimpleMessage } from '../models';

/**
 * direct line chat session action types
 */
export const MESSAGE_ACTIVITY_RECEIVED = '[Activity] MESSAGE_ACTIVITY_RECEIVED';
export const SEND_MESSAGE_ACTIVITY = '[Activity] SEND_MESSAGE_ACTIVITY';
export const MESSAGE_ACTIVITY_SENT = '[Activity] MESSAGE_ACTIVITY_SENT';
export const RETRIEVE_CONNECTION_TOKEN = '[Connection] RETRIEVE_CONNECTION_TOKEN';
export const CONNECTION_TOKEN_RETRIEVED = '[Connection] CONNECTION_TOKEN_RETRIEVED';

/**
 * Message received notification
 */
export class MessageActivityReceivedAction implements Action {
    readonly type = MESSAGE_ACTIVITY_RECEIVED;
    constructor(public activity: Message) { }
}

/**
 * Send new message command
 */
export class SendMessageActivityAction implements Action {
    readonly type = SEND_MESSAGE_ACTIVITY;
    constructor(public message: SimpleMessage) { }
}

/**
 * New message successfully sent notification
 */
export class MessageActivitySentAction implements Action {
    readonly type = MESSAGE_ACTIVITY_SENT;
    constructor(public activity: Message) { }
}

/**
 * Get token to start chat session command
 */
export class RetrieveConnectionTokenAction implements Action {
    readonly type = RETRIEVE_CONNECTION_TOKEN;
    constructor() { }
}

/**
 * Chat token successfully received notification
 */
export class ConnectionTokenRetrievedAction implements Action {
    readonly type = CONNECTION_TOKEN_RETRIEVED;
    constructor(public conversationId: string) { }
}

export type Actions
    = MessageActivityReceivedAction
    | SendMessageActivityAction
    | MessageActivitySentAction
    | RetrieveConnectionTokenAction
    | ConnectionTokenRetrievedAction;