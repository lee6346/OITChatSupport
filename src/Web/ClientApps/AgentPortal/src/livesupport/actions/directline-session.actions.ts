import { Action } from '@ngrx/store';
import { DirectLineChatLoad, DirectLineThread, DirectLineRemoveLoad } from '../models';
import { Activity } from 'botframework-directlinejs';

export const SEND_SESSION_ACTIVITY = '[Session] SEND_SESSION_ACTIVITY';
export const SEND_SESSION_ACTIVITY_COMPLETE = '[Session] SEND_SESSION_ACTIVITY_COMPLETE';
export const RECEIVE_SESSION_ACTIVITY = '[Session] RECEIVE_SESSION_ACTIVITY';
export const RECEIVE_SESSION_DISCONNECT = '[Session] RECEIVE_SESSION_DISCONNECT';
export const REMOVE_SESSION = '[Session] REMOVE_SESSION';
export const REMOVE_SESSION_COMPLETE = '[Session] REMOVE_SESSION';
export const SWITCH_SESSION = '[Session] SWITCH_SESSION';
export const GET_CACHED_ACTIVITY = '[Session] GET_CACHED_ACTIVITY';
export const GET_CACHED_ACTIVITY_COMPLETE = '[Session] GET_CACHED_ACTIVITY_COMPLETE';


export class SendSessionActivityAction implements Action {
    readonly type = SEND_SESSION_ACTIVITY;
    constructor(public chatLoad: DirectLineChatLoad) { }
}

export class SendSessionActivityCompleteAction implements Action {
    readonly type = SEND_SESSION_ACTIVITY_COMPLETE;
    constructor(public activity: Activity) { }
}

export class ReceiveSessionActivityAction implements Action {
    readonly type = RECEIVE_SESSION_ACTIVITY;
    constructor(public activity: Activity) { }
}

export class ReceiveSessionDisconnectAction implements Action {
    readonly type = RECEIVE_SESSION_DISCONNECT;
    constructor(public activity: Activity) { }
}

export class RemoveSessionAction implements Action {
    readonly type = REMOVE_SESSION;
    constructor(public removeLoad: DirectLineRemoveLoad) { }
}

export class RemoveSessionComplete implements Action{
    readonly type = REMOVE_SESSION_COMPLETE;
    constructor(public removeLoad: DirectLineRemoveLoad){}
}

export class SwitchSessionAction implements Action {
    readonly type = SWITCH_SESSION;
    constructor(public conversationId: string) { }
}

export class GetCachedActivityAction implements Action{
    readonly type = GET_CACHED_ACTIVITY;
    constructor(public conversationId: string){}
}

export class GetCachedActivityCompleteAction implements Action{
    readonly type = GET_CACHED_ACTIVITY_COMPLETE;
    constructor(public activities: Activity[]){}
}

export type Actions 
    = SendSessionActivityAction
    | SendSessionActivityCompleteAction
    | ReceiveSessionActivityAction
    | ReceiveSessionDisconnectAction
    | RemoveSessionAction
    | RemoveSessionComplete
    | SwitchSessionAction
    | GetCachedActivityAction
    | GetCachedActivityCompleteAction;