import { Action } from '@ngrx/store';
import { AgentMessage } from '../../model';

export const SEND_MESSAGE = '[agentmessage] SEND_MESSAGE';
export const SEND_MESSAGE_COMPLETE = '[agentmessage] SEND_MESSAGE_COMPLETE';
export const RECEIVE_MESSAGE = '[agentmessage] RECEIVE_MESSAGE';
export const FILTER_BY_AGENT = '[agentmessage] FILTER_BY_AGENT';

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

export class FilterByAgentAction implements Action {
    readonly type = FILTER_BY_AGENT;

    constructor(public agentId: string) { }
}

export type Actions
    = SendMessageAction
    | SendMessageCompleteAction
    | ReceiveMessageAction
    | FilterByAgentAction;