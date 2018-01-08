import { Action } from '@ngrx/store';
import { Agent } from '../models';


export const JOIN_AGENT_GROUP = '[Agent] JOIN_AGENT_GROUP';
export const AGENT_GROUP_JOINED = '[Agent] AGENT_GROUP_JOINED';
export const AGENT_MEMBER_JOINED = '[Agent] AGENT_MEMBER_JOINED';
export const AGENT_MEMBER_LEFT = '[Agent] AGENT_MEMBER_LEFT';  
export const LOAD_AGENT_GROUP = '[Agent] LOAD_AGENT_GROUP'; 
export const AGENT_GROUP_LOADED = '[Agent] AGENT_GROUP_LOADED';  

export class JoinAgentGroupAction implements Action {
    readonly type = JOIN_AGENT_GROUP;
    constructor(public agent: Agent) { }
}

export class AgentGroupJoinedAction implements Action {
    readonly type = AGENT_GROUP_JOINED;
    constructor() { }
}

export class AgentMemberJoinedAction implements Action {
    readonly type = AGENT_MEMBER_JOINED;
    constructor(public agent: Agent) { }
}

export class AgentMemberLeftAction implements Action {
    readonly type = AGENT_MEMBER_LEFT;
    constructor(public agent: Agent) { }
}

export class LoadAgentGroupAction implements Action {
    readonly type = LOAD_AGENT_GROUP;
    constructor() { }
}

export class AgentGroupLoadedAction implements Action {
    readonly type = AGENT_GROUP_LOADED;
    constructor(public agents: Agent[]) { }
}

export type Actions
    =
    | JoinAgentGroupAction
    | AgentGroupJoinedAction
    | AgentMemberJoinedAction
    | AgentMemberLeftAction
    | LoadAgentGroupAction
    | AgentGroupLoadedAction;
