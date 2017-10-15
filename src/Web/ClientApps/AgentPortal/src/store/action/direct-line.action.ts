﻿import { Action } from '@ngrx/store';
import { Activity } from 'botframework-directlinejs';
import { DirectLineConnection, DirectLineThread, DirectLineMessageLoad } from '../../shared/model';

export const GET_CONNECTION_THREAD = '[Token] GET_CONNECTION_THREAD';
export const GET_CONNECTION_THREAD_COMPLETE = '[Token] GET_CONNECTION_THREAD_COMPLETE';
export const MESSAGE_ACTIVITY_RECEIVED = '[Activity] MESSAGE_ACTIVITY_RECEIVED';
export const CLOSED_ACTIVITY_RECEIVED = '[Activity] CLOSED_ACTIVITY_RECEIVED';
export const SEND_MESSAGE_ACTIVITY = '[Activity] SEND_MESSAGE_ACTIVITY';
export const SEND_MESSAGE_ACTIVITY_COMPLETE = '[Activity] SEND_MESSAGE_ACTIVITY_COMPLETE';
export const CHANGE_DIRECT_LINE_SESSION = '[Session] CHANGE_DIRECT_LINE_SESSION';

export class GetConnectionThreadAction implements Action {
    readonly type = GET_CONNECTION_THREAD;
    constructor(public conversationId: string) { }
}
export class GetConnectionThreadCompleteAction implements Action {
    readonly type = GET_CONNECTION_THREAD_COMPLETE;
    constructor(public directLineThread: DirectLineThread) { }
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
    constructor(
        public directLineMessageLoad: DirectLineMessageLoad
    ) { }
}
export class SendMessageActivityCompleteAction implements Action {
    readonly type = SEND_MESSAGE_ACTIVITY_COMPLETE;
    constructor(public activity: Activity) { }
}
export class ChangeDirectLineSessionAction implements Action {
    readonly type = CHANGE_DIRECT_LINE_SESSION;
    constructor(public conversationId: string) { }
}
export type Actions
    = GetConnectionThreadAction
    | GetConnectionThreadCompleteAction
    | MessageActivityReceivedAction
    | ClosedActivityReceivedAction
    | SendMessageActivityAction
    | SendMessageActivityCompleteAction
    | ChangeDirectLineSessionAction;