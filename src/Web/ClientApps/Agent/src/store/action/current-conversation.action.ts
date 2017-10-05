import { Action } from '@ngrx/store';


export const CHANGE_CONVERSATION = '[conversation] CHANGE_CONVERSATION';
export const CHANGE_CONVERSATION_COMPLETE = '[conversation] CHANGE_CONVERSATION_COMPLETE';

export class ChangeConversationAction implements Action {
    readonly type = CHANGE_CONVERSATION;
    constructor(public conversationId: string) { }
}

export class ChangeConversationCompleteAction implements Action {
    readonly type = CHANGE_CONVERSATION_COMPLETE;
    constructor(public conversationId: string) { }
}

export type Actions
    = ChangeConversationAction
    | ChangeConversationCompleteAction;