import { Action } from '@ngrx/store';
import { Agent, AgentMessage } from '../models';


export const JOIN_GROUP = '[agent] JOIN_GROUP';
export const JOIN_GROUP_COMPLETE = '[agent] JOIN_GROUP_COMPLETE'
export const RECEIVED_JOINED_AGENT = '[agent] RECEIVED_JOINED_AGENT';
export const RECEIVED_LEFT_AGENT = '[agent] RECEIVED_LEFT_AGENT';  
export const LOAD_AGENTS = '[agent] LOAD_AGENTS'; 
export const LOAD_AGENTS_COMPLETE = '[agent] LOAD_AGENTS_COMPLETE';  
export const SEND_GROUP_MESSAGE = '[agentmessage] SEND_GROUP_MESSAGE';  
export const SEND_MESSAGE_COMPLETE = '[agentmessage] SEND_MESSAGE_COMPLETE';
export const RECEIVE_GROUP_MESSAGE = '[agentmessage] RECEIVE_GROUP_MESSAGE';
export const LOAD_GROUP_MESSAGES = '[agentmessage] LOAD_GROUP_MESSAGES';
export const LOAD_MESSAGES_COMPLETE = '[agentmessage] LOAD_MESSAGES_COMPLETE';


export class JoinGroupAction implements Action {
    readonly type = JOIN_GROUP;
    constructor(public agent: Agent) { }
}
export class JoinGroupCompleteAction implements Action {
    readonly type = JOIN_GROUP_COMPLETE;
    constructor(public agent: Agent) { }
}
export class ReceivedJoinedAgentAction implements Action {
    readonly type = RECEIVED_JOINED_AGENT;
    constructor(public agent: Agent) { }
}
export class ReceivedLeftAgentAction implements Action {
    readonly type = RECEIVED_LEFT_AGENT;
    constructor(public agent: Agent) { }
}
export class LoadAgentsAction implements Action {
    readonly type = LOAD_AGENTS;
    constructor(public group: string) { }
}
export class LoadAgentsCompleteAction implements Action {
    readonly type = LOAD_AGENTS_COMPLETE;
    constructor(public agents: Agent[]) { }
}
export class SendGroupMessageAction implements Action{
    readonly type = SEND_GROUP_MESSAGE;
    constructor(public agentMessage: AgentMessage) { }
}
export class SendMessageCompleteAction implements Action {
    readonly type = SEND_MESSAGE_COMPLETE;
    constructor(public agentMessage: AgentMessage) { }
}
export class ReceiveGroupMessageAction implements Action {
    readonly type = RECEIVE_GROUP_MESSAGE;
    constructor(public agentMessage: AgentMessage) { }
}
export class LoadGroupMessagesAction implements Action {
    readonly type = LOAD_GROUP_MESSAGES;
    constructor(public group: string) { }
}
export class LoadMessagesCompleteAction implements Action {
    readonly type = LOAD_MESSAGES_COMPLETE;
    constructor(public agentMessages: AgentMessage[]) { }
}

export type Actions
    =
    | JoinGroupAction
    | JoinGroupCompleteAction
    | ReceivedJoinedAgentAction
    | ReceivedLeftAgentAction
    | LoadAgentsAction
    | LoadAgentsCompleteAction
    | SendGroupMessageAction
    | SendMessageCompleteAction
    | ReceiveGroupMessageAction
    | LoadGroupMessagesAction
    | LoadMessagesCompleteAction;
