import { Action } from '@ngrx/store';
import { AgentMessage } from '../../shared/model';

export const SEND_MESSAGE = '[agentmessage] SEND_MESSAGE';
export const SEND_MESSAGE_COMPLETE = '[agentmessage] SEND_MESSAGE_COMPLETE';
export const RECEIVE_MESSAGE = '[agentmessage] RECEIVE_MESSAGE';
export const RETRIEVE_CURRENT_MESSAGES = '[agentmessage] RETRIEVE_CURRENT_MESSAGES';
export const RETRIEVE_CURRENT_MESSAGES_COMPLETE = '[agentmessage] RETRIEVE_CURRENT_MESSAGES_COMPLETE';

export class SendMessageAction implements Action{
    readonly type = SEND_MESSAGE;
    constructor(public agentMessage: AgentMessage) { }
}
export class SendMessageCompleteAction implements Action {
    readonly type = SEND_MESSAGE_COMPLETE;
    constructor(public agentMessage: AgentMessage) { }
}
export class ReceiveMessageAction implements Action {
    readonly type = RECEIVE_MESSAGE;
    constructor(public agentMessage: AgentMessage) { }
}
export class RetrieveCurrentMessagesAction implements Action {
    readonly type = RETRIEVE_CURRENT_MESSAGES;
    constructor(public agentId: string) { }
}
export class RetrieveCurrentMessagesCompleteAction implements Action {
    readonly type = RETRIEVE_CURRENT_MESSAGES_COMPLETE;
    constructor(public agentMessages: AgentMessage[]) { }
}
export type Actions
    = SendMessageAction
    | SendMessageCompleteAction
    | ReceiveMessageAction
    | RetrieveCurrentMessagesAction
    | RetrieveCurrentMessagesCompleteAction;