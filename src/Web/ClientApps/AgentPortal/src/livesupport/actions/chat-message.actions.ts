import { Action } from '@ngrx/store';
import { CachedMessageLoad, ChatPayload } from '../models';
import { Activity, Conversation } from 'botframework-directlinejs';

export const SEND_MESSAGE_ACTIVITY = '[Message] SEND_MESSAGE_ACTIVITY';
export const MESSAGE_ACTIVITY_SENT = '[Message] MESSAGE_ACTIVITY_SENT';
export const MESSAGE_ACTIVITY_RECEIVED = '[Message] MESSAGE_ACTIVITY_RECEIVED';
export const LOAD_CACHED_MESSAGES = '[Message] LOAD_CACHED_MESSAGES';
export const CACHED_MESSAGES_LOADED = '[Message] CACHED_MESSAGES_LOADED';

export class SendMessageActivityAction implements Action {
    readonly type = SEND_MESSAGE_ACTIVITY;
    constructor(public chatLoad: ChatPayload) { }
}

export class MessageActivitySentAction implements Action {
    readonly type = MESSAGE_ACTIVITY_SENT;
    constructor(public activity: Activity) { }
}

export class MessageActivityReceivedAction implements Action {
    readonly type = MESSAGE_ACTIVITY_RECEIVED;
    constructor(public activity: Activity) { }
}

export class LoadCachedMessagesAction implements Action {
    readonly type = LOAD_CACHED_MESSAGES;
    constructor(public conversation: Conversation) { }
}

export class CachedMessagesLoadedAction implements Action {
    readonly type = CACHED_MESSAGES_LOADED;
    constructor(public cachedLoad: CachedMessageLoad) { }
}

export type Actions
    = SendMessageActivityAction
    | MessageActivitySentAction
    | MessageActivityReceivedAction
    | LoadCachedMessagesAction
    | CachedMessagesLoadedAction;