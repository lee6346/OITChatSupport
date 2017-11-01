import { Action } from '@ngrx/store';
import { LiveRequest, SimpleMessage } from '../models';
import { Activity, Message } from 'botframework-directlinejs';


export const RETRIEVE_BOT_TOKEN = '[Token] RETRIEVE_BOT_TOKEN';
export const BOT_TOKEN_RETRIEVED = '[Token] BOT_TOKEN_RETRIEVED';
export const MESSAGE_ACTIVITY_RECEIVED = '[Message] MESSAGE_ACTIVITY_RECEIVED';
export const DISCONNECT_ACTIVITY_RECEIVED = '[Disconnect] DISCONNECT_ACTIVITY_RECEIVED';
export const SEND_MESSAGE_ACTIVITY = '[Message] SEND_MESSAGE_ACTIVITY';
export const MESSAGE_ACTIVITY_SENT = '[Message] MESSAGE_ACTIVITY_SENT';
export const END_CHAT_SESSION = '[Chat] END_CHAT_SESSION';
export const CHAT_SESSION_ENDED = '[Chat] CHAT_SESSION_ENDED';
export const REQUEST_LIVE_SUPPORT = '[LiveSupport] REQUEST_LIVE_SUPPORT';
export const LIVE_SUPPORT_REQUESTED = '[LiveSupport] LIVE_SUPPORT_REQUESTED';
export const CHANGE_CHAT_SUBSCRIBER = '[Chat] CHANGE_CHAT_SUBSCRIBER';



export class RetrieveBotTokenAction implements Action {
    readonly type = RETRIEVE_BOT_TOKEN;
    constructor(public botHandle: string) { }
}

export class BotTokenRetrievedAction implements Action {
    readonly type = BOT_TOKEN_RETRIEVED;
    constructor(public conversationId: string) { }
}

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

export class EndChatSessionAction implements Action {
    readonly type = END_CHAT_SESSION;
    constructor(public conversationId: string) { }
}

export class ChatSessionEndedAction implements Action {
    readonly type = CHAT_SESSION_ENDED;
    constructor(public conversationId: string) { }
}

export class RequestLiveSupportAction implements Action {
    readonly type = REQUEST_LIVE_SUPPORT;
    constructor(public request: LiveRequest) { }
}

export class LiveSupportRequestedAction implements Action {
    readonly type = LIVE_SUPPORT_REQUESTED;
    constructor(public request: LiveRequest) { }
}

export class ChangeChatSubscriberAction implements Action {
    readonly type = CHANGE_CHAT_SUBSCRIBER;
    constructor(public id: string) { }
}


export type Actions
    = RetrieveBotTokenAction
    | BotTokenRetrievedAction
    | DisconnectActivityReceived
    | MessageActivityReceivedAction
    | SendMessageActivityAction
    | MessageActivitySentAction
    | EndChatSessionAction
    | ChatSessionEndedAction
    | RequestLiveSupportAction
    | LiveSupportRequestedAction
    | ChangeChatSubscriberAction;