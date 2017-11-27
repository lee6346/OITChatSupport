import { Action } from '@ngrx/store';
import { TransferRequest } from '../models';

export const REQUEST_AGENT_TRANSFER = '[AgentTransfer] REQUEST_AGENT_TRANSFER';
export const AGENT_TRANSFER_REQUESTED = '[AgentTransfer] AGENT_TRANSFER_REQUESTED';

export class RequestAgentTransferAction implements Action {
    readonly type = REQUEST_AGENT_TRANSFER;
    constructor(public request: TransferRequest) { }
}

export class AgentTransferRequestedAction implements Action {
    readonly type = AGENT_TRANSFER_REQUESTED;
    constructor() { }
}

export type Actions
    = RequestAgentTransferAction
    | AgentTransferRequestedAction;