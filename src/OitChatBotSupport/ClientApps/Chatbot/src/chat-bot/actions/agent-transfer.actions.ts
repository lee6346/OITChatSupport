import { Action } from '@ngrx/store';

import { TransferRequest } from '../models';

/**
 * constant representing request agent transfer action
 */
export const REQUEST_AGENT_TRANSFER = '[AgentTransfer] REQUEST_AGENT_TRANSFER';

/**
 * constant representing agent transfer requested action
 */
export const AGENT_TRANSFER_REQUESTED = '[AgentTransfer] AGENT_TRANSFER_REQUESTED';

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

export type Actions
    = RequestAgentTransferAction
    | AgentTransferRequestedAction;