import { Action } from '@ngrx/store';
import { DirectLineSession, LiveRequest, SimpleMessage } from '../model';
import { Activity } from 'botframework-directlinejs';


export const GET_BOT_TOKEN = '[Bot] GET_BOT_TOKEN';
export const GET_BOT_TOKEN_COMPLETE = '[Bot] GET_BOT_TOKEN_COMPLETE';
export const DIRECT_LINE_ACTIVITY_RECEIVED = '[Activity] DIRECT_LINE_ACTIVITY_RECEIVED';
export const POST_DIRECT_LINE_ACTIVITY = '[Activity] POST_DIRECT_LINE_ACTIVITY';
export const POST_DIRECT_LINE_ACTIVITY_COMPLETE = '[Activity] POST_DIRECT_LINE_ACTIVITY_COMPLETE';
export const DIRECT_LINE_DISCONNECT = '[DirectLine] DIRECT_LINE_DISCONNECT';
export const DIRECT_LINE_DISCONNECT_COMPLETE = '[DirectLine] DIRECT_LINE_DISCONNECT_COMPLETE';
export const REQUEST_LIVE_SUPPORT = '[LiveSupport] REQUEST_LIVE_SUPPORT';
export const REQUEST_LIVE_SUPPORT_COMPLETE = '[LiveSupport] REQUEST_LIVE_SUPPORT_COMPLETE';
export const CHANGE_CHAT_SUBSCRIBER = '[Chat] CHANGE_CHAT_SUBSCRIBER';



export class GetBotTokenAction implements Action {
    readonly type = GET_BOT_TOKEN;
    constructor(public botHandle: string) { }
}

export class GetBotTokenCompleteAction implements Action {
    readonly type = GET_BOT_TOKEN_COMPLETE;
    constructor(public conversationId: string) { }
}

export class DirectLineActivityReceivedAction implements Action {
    readonly type = DIRECT_LINE_ACTIVITY_RECEIVED;
    constructor(public activity: Activity) { }
}

export class PostDirectLineActivityAction implements Action {
    readonly type = POST_DIRECT_LINE_ACTIVITY;
    constructor(public message: SimpleMessage) { }
}

export class PostDirectLineActivityCompleteAction implements Action {
    readonly type = POST_DIRECT_LINE_ACTIVITY_COMPLETE;
    constructor(public activity: Activity) { }
}

export class DirectLineDisconnectAction implements Action {
    readonly type = DIRECT_LINE_DISCONNECT;
    constructor(public conversationId: string) { }
}

export class DirectLineDisconnectCompleteAction implements Action {
    readonly type = DIRECT_LINE_DISCONNECT_COMPLETE;
    constructor(public conversationId: string) { }
}

export class RequestLiveSupportAction implements Action {
    readonly type = REQUEST_LIVE_SUPPORT;
    constructor(public request: LiveRequest) { }
}

export class RequestLiveSupportCompleteAction implements Action {
    readonly type = REQUEST_LIVE_SUPPORT_COMPLETE;
    constructor(public request: LiveRequest) { }
}

export class ChangeChatSubscriberAction implements Action {
    readonly type = CHANGE_CHAT_SUBSCRIBER;
    constructor(public id: string) { }
}


export type Actions
    = GetBotTokenAction
    | GetBotTokenCompleteAction
    | DirectLineActivityReceivedAction
    | PostDirectLineActivityAction
    | DirectLineDisconnectAction
    | DirectLineDisconnectCompleteAction
    | RequestLiveSupportAction
    | RequestLiveSupportCompleteAction
    | ChangeChatSubscriberAction;