import { Action } from '@ngrx/store';
import { Activity, Message } from 'botframework-directlinejs';

import { SimpleMessage } from '../models';

/**
 * constants representing direct line activity actions
 */
export const MESSAGE_ACTIVITY_RECEIVED = '[Activity] MESSAGE_ACTIVITY_RECEIVED';
export const DISCONNECT_ACTIVITY_RECEIVED = '[Activity] DISCONNECT_ACTIVITY_RECEIVED';
export const SEND_MESSAGE_ACTIVITY = '[Activity] SEND_MESSAGE_ACTIVITY';
export const MESSAGE_ACTIVITY_SENT = '[Activity] MESSAGE_ACTIVITY_SENT';

/**
 * Action to notify a message received 
 */
export class MessageActivityReceivedAction implements Action {
    readonly type = MESSAGE_ACTIVITY_RECEIVED;
    constructor(public activity: Message) { }
}

/**
 * Action to notify that a chat participant (bot or agent) has disconnected
 */
export class DisconnectActivityReceived implements Action {
    readonly type = DISCONNECT_ACTIVITY_RECEIVED;
    constructor(public activity: Activity) { }
}

/**
 * Action to send a message
 */
export class SendMessageActivityAction implements Action {
    readonly type = SEND_MESSAGE_ACTIVITY;
    constructor(public message: SimpleMessage) { }
}

/**
 * Action to notify that the message was seuccessfully sent
 */
export class MessageActivitySentAction implements Action {
    readonly type = MESSAGE_ACTIVITY_SENT;
    constructor(public activity: Message) { }
}

export type Actions
    = DisconnectActivityReceived
    | MessageActivityReceivedAction
    | SendMessageActivityAction
    | MessageActivitySentAction;