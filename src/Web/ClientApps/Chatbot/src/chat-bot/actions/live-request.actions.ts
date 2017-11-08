import { Action } from '@ngrx/store';
import { LiveRequest } from '../models';

export const REQUEST_LIVE_SUPPORT = '[LiveSupport] REQUEST_LIVE_SUPPORT';
export const LIVE_SUPPORT_REQUESTED = '[LiveSupport] LIVE_SUPPORT_REQUESTED';
export const CANCEL_LIVE_SUPPORT = '[LiveSupport] CANCEL_LIVE_SUPPORT';
export const LIVE_SUPPORT_CANCELED = '[LiveSupport] LIVE_SUPPORT_CANCELED';

export class RequestLiveSupportAction implements Action {
    readonly type = REQUEST_LIVE_SUPPORT;
    constructor(public request: LiveRequest) { }
}

export class LiveSupportRequestedAction implements Action {
    readonly type = LIVE_SUPPORT_REQUESTED;
    constructor(public request: LiveRequest) { }
}

export class CancelLiveSupportAction implements Action {
    readonly type = CANCEL_LIVE_SUPPORT;
    constructor(public threadId: string) { }
}

export class LiveSupportCanceledAction implements Action {
    readonly type = LIVE_SUPPORT_CANCELED;
    constructor() { }
}

export type Actions
    = RequestLiveSupportAction
    | LiveSupportRequestedAction
    | CancelLiveSupportAction
    | LiveSupportCanceledAction;