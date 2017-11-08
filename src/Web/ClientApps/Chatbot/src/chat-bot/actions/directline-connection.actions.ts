import { Action } from '@ngrx/store';
import { SimpleMessage } from '../models';
import { Activity } from 'botframework-directlinejs';

export const RETRIEVE_BOT_TOKEN = '[Token] RETRIEVE_BOT_TOKEN';
export const BOT_TOKEN_RETRIEVED = '[Token] BOT_TOKEN_RETRIEVED';
export const END_CHAT_SESSION = '[Chat] END_CHAT_SESSION';
export const CHAT_SESSION_ENDED = '[Chat] CHAT_SESSION_ENDED';
export const CHANGE_CHAT_SUBSCRIBER = '[Chat] CHANGE_CHAT_SUBSCRIBER';

export class RetrieveBotTokenAction implements Action {
    readonly type = RETRIEVE_BOT_TOKEN;
    constructor(public botHandle: string) { }
}

export class BotTokenRetrievedAction implements Action {
    readonly type = BOT_TOKEN_RETRIEVED;
    constructor(public conversationId: string) { }
}

export class EndChatSessionAction implements Action {
    readonly type = END_CHAT_SESSION;
    constructor(public conversationId: string) { }
}

export class ChatSessionEndedAction implements Action {
    readonly type = CHAT_SESSION_ENDED;
    constructor(public conversationId: string) { }
}

export class ChangeChatSubscriberAction implements Action {
    readonly type = CHANGE_CHAT_SUBSCRIBER;
    constructor(public id: string) { }
}

export type Actions
    = RetrieveBotTokenAction
    | BotTokenRetrievedAction
    | EndChatSessionAction
    | ChatSessionEndedAction
    | ChangeChatSubscriberAction;