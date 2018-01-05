import { Action } from '@ngrx/store';

import { TransferRequest, CancelRequest } from '../models';

/**
 * agent transfer action types
 */
export const REQUEST_AGENT_TRANSFER = '[AgentTransfer] REQUEST_AGENT_TRANSFER';
export const AGENT_TRANSFER_REQUESTED = '[AgentTransfer] AGENT_TRANSFER_REQUESTED';
export const CANCEL_AGENT_TRANSFER = '[AgentTransfer] CANCEL_AGENT_TRANSFER';
export const AGENT_TRANSFER_CANCELED = '[AgentTransfer] AGENT_TRANSFER_CANCELED';
export const AGENT_SESSION_ENDED = '[AgentTransfer] AGENT_SESSION_ENDED';

/**
 * Request agent transfer command
 */
export class RequestAgentTransferAction implements Action {
    readonly type = REQUEST_AGENT_TRANSFER;
    constructor(public request: TransferRequest) { }
}

/**
 * Agent transfer successfully requested notification
 */
export class AgentTransferRequestedAction implements Action {
    readonly type = AGENT_TRANSFER_REQUESTED;
    constructor() { }
}

/**
 * Cancel pending agent transfer command
 */
export class CancelAgentTransferAction implements Action {
    readonly type = CANCEL_AGENT_TRANSFER;
    constructor(public cancelRequest: CancelRequest) { }
}

/**
 * Pending agent transfer successfully canceled notification
 */
export class AgentTransferCanceledAction implements Action {
    readonly type = AGENT_TRANSFER_CANCELED;
    constructor() { }
}

/**
 * Agent disconnected from the chat session notification
 */
export class AgentSessionEndedAction implements Action {
    readonly type = AGENT_SESSION_ENDED;
    constructor() { }
}

export type Actions
    = RequestAgentTransferAction
    | AgentTransferRequestedAction
    | CancelAgentTransferAction
    | AgentTransferCanceledAction
    | AgentSessionEndedAction;