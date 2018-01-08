import { Action } from '@ngrx/store';

import { TransferRequest, CancelRequest } from '../models';


export const REQUEST_AGENT_TRANSFER = '[AgentTransfer] REQUEST_AGENT_TRANSFER';
export const AGENT_TRANSFER_REQUESTED = '[AgentTransfer] AGENT_TRANSFER_REQUESTED';
export const CANCEL_AGENT_TRANSFER = '[AgentTransfer] CANCEL_AGENT_TRANSFER';
export const AGENT_TRANSFER_CANCELED = '[AgentTransfer] AGENT_TRANSFER_CANCELED';

export class RequestAgentTransferAction implements Action {
    readonly type = REQUEST_AGENT_TRANSFER;
    constructor(public request: TransferRequest) { }
}

export class AgentTransferRequestedAction implements Action {
    readonly type = AGENT_TRANSFER_REQUESTED;
    constructor() { }
}

export class CancelAgentTransferAction implements Action {
    readonly type = CANCEL_AGENT_TRANSFER;
    constructor(public cancelRequest: CancelRequest) { }
}

export class AgentTransferCanceledAction implements Action {
    readonly type = AGENT_TRANSFER_CANCELED;
    constructor() { }
}

export type Actions
    = RequestAgentTransferAction
    | AgentTransferRequestedAction
    | CancelAgentTransferAction
    | AgentTransferCanceledAction;