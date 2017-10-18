import { Action } from '@ngrx/store';
import { Activity } from 'botframework-directlinejs';
import { DirectLineChatLoad } from '../models';

export const SEND_SESSION_ACTIVITY = '[Session] SEND_SESSION_ACTIVITY';
export const SEND_SESSION_ACTIVITY_COMPLETE = '[Session] SEND_SESSION_ACTIVITY_COMPLETE';
export const RECEIVE_SESSION_ACTIVITY = '[Session] RECEIVE_SESSION_ACTIVITY';

export class SendSessionActivityAction implements Action {
    readonly type = SEND_SESSION_ACTIVITY;
    constructor(public chatLoad: DirectLineChatLoad) { }
}

export class SendSessionActivityCompleteAction implements Action {
    readonly type = SEND_SESSION_ACTIVITY_COMPLETE;
    constructor(public chatLoad: DirectLineChatLoad) { }
}

export class ReceiveSessionActivityAction implements Action {
    readonly type = RECEIVE_SESSION_ACTIVITY;
    constructor(public activity: Activity) { }
}

export type Actions = SendSessionActivityAction | SendSessionActivityCompleteAction | ReceiveSessionActivityAction;