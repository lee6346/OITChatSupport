import { Action } from '@ngrx/store';
import { Activity } from 'botframework-directlinejs';

import { DirectLineConnection } from '../../shared/model/directline-connection.model';

export const GET_CONNECTION_TOKEN = '[Token] GET_CONNECTION_TOKEN';
export const GET_CONNECTION_TOKEN_COMPLETE = '[Token] GET_CONNECTION_TOKEN_COMPLETE';

export const OPEN_CONNECTION_STREAM = '[Connection] OPEN_CONNECTION_STREAM';
export const CLOSE_CONNECTION_STREAM = '[Connection] CLOSE_CONNECTION_STREAM';

export const MESSAGE_ACTIVITY_RECEIVED = '[Activity] MESSAGE_ACTIVITY_RECEIVED';
export const CLOSED_ACTIVITY_RECEIVED = '[Activity] CLOSED_ACTIVITY_RECEIVED';
export const SEND_MESSAGE_ACTIVITY = '[Activity] SEND_MESSAGE_ACTIVITY';
export const SEND_MESSAGE_ACTIVITY_COMPLETE = '[Activity] SEND_MESSAGE_ACTIVITY_COMPLETE';

export const CHANGE_DIRECT_LINE_SESSION = '[Session] CHANGE_DIRECT_LINE_SESSION';
export const CHANGE_DIRECT_LINE_SESSION_COMPLETE = '[Session] CHANGE_DIRECT_LINE_SESSION_COMPLETE';


export class GetConnectionTokenAction implements Action {
    readonly type = GET_CONNECTION_TOKEN;

    constructor(public conversationId: string) { }
}

export class GetConnectionTokenCompleteAction implements Action {
    readonly type = GET_CONNECTION_TOKEN_COMPLETE;

    constructor(public directLineConnection: DirectLineConnection) { }
}

export class OpenConnectionStreamAction implements Action {
    readonly type = OPEN_CONNECTION_STREAM;

    constructor(public directLineConnection: DirectLineConnection) { }
}

export class CloseConnectionStreamAction implements Action {
    readonly type = CLOSE_CONNECTION_STREAM;

    constructor(conversationId: string) { }
}

export class MessageActivityReceivedAction implements Action {
    readonly type = MESSAGE_ACTIVITY_RECEIVED;

    constructor(public activity: Activity) { }
}

export class ClosedActivityReceivedAction implements Action {
    readonly type = CLOSED_ACTIVITY_RECEIVED;

    constructor(public activity: Activity) { }
}

export class SendMessageActivityAction implements Action {
    readonly type = SEND_MESSAGE_ACTIVITY;

    constructor(public activity: Activity) { }
}

export class SendMessageActivityCompleteAction implements Action {
    readonly type = SEND_MESSAGE_ACTIVITY_COMPLETE;

    constructor(public activityId: string) { }
}


export class ChangeDirectLineSessionAction implements Action {
    readonly type = CHANGE_DIRECT_LINE_SESSION;

    constructor(public directLineConnection: DirectLineConnection) { }
}

export class ChangeDirectLineSessionCompleteAction implements Action {
    readonly type = CHANGE_DIRECT_LINE_SESSION_COMPLETE;

    constructor(public directLineConnection: DirectLineConnection) { }
}


export type Actions
    = GetConnectionTokenAction
    | GetConnectionTokenCompleteAction
    | OpenConnectionStreamAction
    | CloseConnectionStreamAction
    | MessageActivityReceivedAction
    | ClosedActivityReceivedAction
    | SendMessageActivityAction
    | SendMessageActivityCompleteAction
    | ChangeDirectLineSessionAction
    | ChangeDirectLineSessionCompleteAction;