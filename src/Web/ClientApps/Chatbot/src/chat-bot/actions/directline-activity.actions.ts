import { Action } from '@ngrx/store';
import { SimpleMessage } from '../models';
import { Activity, Message } from 'botframework-directlinejs';

export const MESSAGE_ACTIVITY_RECEIVED = '[Message] MESSAGE_ACTIVITY_RECEIVED';
export const DISCONNECT_ACTIVITY_RECEIVED = '[Disconnect] DISCONNECT_ACTIVITY_RECEIVED';
export const SEND_MESSAGE_ACTIVITY = '[Message] SEND_MESSAGE_ACTIVITY';
export const MESSAGE_ACTIVITY_SENT = '[Message] MESSAGE_ACTIVITY_SENT';

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

export type Actions
    = DisconnectActivityReceived
    | MessageActivityReceivedAction
    | SendMessageActivityAction
    | MessageActivitySentAction;