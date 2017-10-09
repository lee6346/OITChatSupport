import { Action } from '@ngrx/store';
import { LiveRequest } from '../../model';
import { DirectLine, Conversation, Activity, ConnectionStatus } from 'botframework-directlinejs';


export const GET_CONNECTION_TOKEN = '[Token] GET_CONNECTION_TOKEN';
export const GET_CONNECTION_TOKEN_COMPLETE = '[Token] GET_CONNECTION_TOKEN_COMPLETE';

export const OPEN_CONNECTION_STREAM = '[Connection] OPEN_CONNECTION_STREAM';
export const OPEN_CONNECTION_STREAM_COMPLETE = '[Connection] OPEN_CONNECTION_STREAM_COMPLETE';
export const CLOSE_CONNECTION_STREAM = '[Connection] CLOSE_CONNECTION_STREAM';
export const CLOSE_CONNECTION_STREAM_COMPLETE = '[Connection] CLOSE_CONNECTION_STREAM_COMPLETE';
export const SCAN_CONNECTIONS = '[Connections] SCAN_CONNECTIONS';

export const MESSAGE_ACTIVITY_RECEIVED = '[Activity] MESSAGE_ACTIVITY_RECEIVED';
export const CLOSED_ACTIVITY_RECEIVED = '[Activity] CLOSED_ACTIVITY_RECEIVED';
export const SEND_MESSAGE_ACTIVITY = '[Activity] SEND_MESSAGE_ACTIVITY';
//returns an acitivity number that we must store
export const SEND__MESSAGE_ACTIVITY_COMPLETE = '[Activity] SEND_MESSAGE_ACTIVITY_COMPLETE';
export const SEND_CLOSED_ACTIVITY = '[Activity] SEND_CLOSED_ACTIVITY';
export const SEND_CLOSED_ACTIVITY_COMPLETE = '[Activity] SEND_CLOSED_ACTIVITY_COMPLETE';

export const CHANGE_DIRECT_LINE_SESSION = '[Session] CHANGE_DIRECT_LINE_SESSION';
export const CHANGE_DIRECT_LINE_SESSION_COMPLETE = '[Session] CHANGE_DIRECT_LINE_SESSION_COMPLETE';


export class GetConnectionTokenAction implements Action {
    readonly type = GET_CONNECTION_TOKEN;

    constructor(public conversationId: string) { }
}
export class OpenConnectionStreamAction implements Action {
    readonly type = OPEN_CONNECTION_STREAM;

    constructor(public conversation: Conversation) { }
}
export class OpenConnectionStreamCompleteAction implements Action {
    readonly type = OPEN_CONNECTION_STREAM_COMPLETE;

    constructor() { }
}
export class MessageActivityReceivedAction implements Action {
    readonly type = MESSAGE_ACTIVITY_RECEIVED;

    constructor(public activity: Activity) { }
}

export class SendMessageActivityAction implements Action {
    readonly type = SEND_MESSAGE_ACTIVITY;

    constructor(public activity: Activity) { }
}

export class SendMessageActivityCompleteAction implements Action {
    readonly type = SEND__MESSAGE_ACTIVITY_COMPLETE;

    constructor(public activityId: string) { }
}

export type Actions
    = GetConnectionTokenAction
    | OpenConnectionStreamAction
    | OpenConnectionStreamCompleteAction
    | MessageActivityReceivedAction
    | SendMessageActivityAction
    | SendMessageActivityCompleteAction;