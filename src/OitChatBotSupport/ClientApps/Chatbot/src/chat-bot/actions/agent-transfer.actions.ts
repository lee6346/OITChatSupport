import { Action } from '@ngrx/store';

import { TransferRequest, CancelRequest } from '../models';

/**
 * constant representing request agent transfer action
 */
export const REQUEST_AGENT_TRANSFER = '[AgentTransfer] REQUEST_AGENT_TRANSFER';

/**
 * constant representing agent transfer requested action
 */
export const AGENT_TRANSFER_REQUESTED = '[AgentTransfer] AGENT_TRANSFER_REQUESTED';

/**
 * constant representing action to cancel pending agent transfer request
 */
export const CANCEL_AGENT_TRANSFER = '[AgentTransfer] CANCEL_AGENT_TRANSFER';

/**
 * constant representing transfer canceled action
 */
export const AGENT_TRANSFER_CANCELED = '[AgentTransfer] AGENT_TRANSFER_CANCELED';

/**
 * Action to request an agent transfer
 */
export class RequestAgentTransferAction implements Action {
    readonly type = REQUEST_AGENT_TRANSFER;
    constructor(public request: TransferRequest) { }
}

/**
 * Action to notify that agent transfer has been requested
 */
export class AgentTransferRequestedAction implements Action {
    readonly type = AGENT_TRANSFER_REQUESTED;
    constructor() { }
}

/**
 * Action to cancel a pending transfer request
 */
export class CancelAgentTransferAction implements Action {
    readonly type = CANCEL_AGENT_TRANSFER;
    constructor(public cancelRequest: CancelRequest) { }
}

/**
 * Action to notify transfer has been canceled
 */
export class AgentTransferCanceledAction implements Action {
    readonly type = AGENT_TRANSFER_CANCELED;
    constructor() { }
}

export type Actions
    = RequestAgentTransferAction
    | AgentTransferRequestedAction
    | CancelAgentTransferAction
    | AgentTransferCanceledAction;