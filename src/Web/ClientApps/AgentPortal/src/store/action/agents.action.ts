﻿import { Action } from '@ngrx/store';
import { Agent } from '../../shared/model';

export const JOIN_GROUP = '[agent] JOIN_GROUP';
export const LEAVE_GROUP = '[agent] LEAVE_GROUP';
export const JOIN_GROUP_COMPLETE = '[agent] JOIN_GROUP_COMPLETE';
export const LEAVE_GROUP_COMPLETE = '[agent] LEAVE_GROUP_COMPLETE';
export const RECEIVED_GROUP_JOINED = '[agent] RECEIVED_GROUP_JOINED';
export const RECEIVED_GROUP_LEFT = '[agent] RECEIVED_GROUP_LEFT';
export const RETRIEVE_GROUP_AGENTS = '[agent] RETRIEVE_GROUP_AGENTS';
export const RETRIEVE_GROUP_AGENTS_COMPLETE = '[agent] RETRIEVE_GROUP_AGENTS_COMPLETE';

export class JoinGroupAction implements Action {
    readonly type = JOIN_GROUP;

    constructor(public agent: Agent) { }
}

export class LeaveGroupAction implements Action {
    readonly type = LEAVE_GROUP;

    constructor(public agent: Agent) { }

}

export class JoinGroupActionComplete implements Action {
    readonly type = JOIN_GROUP_COMPLETE;

    constructor(public agent: Agent) { }
}

export class LeaveGroupActionComplete implements Action {
    readonly type = LEAVE_GROUP_COMPLETE;

    constructor(public agent: Agent) { }
}

export class ReceivedGroupJoinedAction implements Action {
    readonly type = RECEIVED_GROUP_JOINED;

    constructor(public agent: Agent) { }
}

export class ReceivedGroupLeftAction implements Action {
    readonly type = RECEIVED_GROUP_LEFT;

    constructor(public agent: Agent) { }
}

export class RetrieveGroupAgentsAction implements Action {
    readonly type = RETRIEVE_GROUP_AGENTS;

    constructor(public agentId: string) { }
}

export class RetrieveGroupAgentsCompleteAction implements Action {
    readonly type = RETRIEVE_GROUP_AGENTS_COMPLETE;

    constructor(public agents: Agent[]) { }
}


export type Actions
    = JoinGroupAction
    | LeaveGroupAction
    | JoinGroupActionComplete
    | LeaveGroupActionComplete
    | ReceivedGroupJoinedAction
    | ReceivedGroupLeftAction
    | RetrieveGroupAgentsAction
    | RetrieveGroupAgentsCompleteAction;