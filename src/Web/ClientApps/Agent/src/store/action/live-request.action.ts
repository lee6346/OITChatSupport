import { Action } from '@ngrx/store';
import { LiveRequest } from '../../model';

export const ACCEPT_LIVE_REQUEST = '[liverequest] ACCEPT_LIVE_REQUEST';
export const ACCEPT_LIVE_REQUEST_COMPLETE = '[liverequest] ACCEPT_LIVE_REQUEST_COMPLETE';
export const RECEIVE_ACCEPT_REQUEST = '[liverequest] RECEIVE_ACCEPT_REQUEST';

export class AcceptLiveRequestAction implements Action {
    readonly type = ACCEPT_LIVE_REQUEST;

    constructor(public liveRequest: LiveRequest) { }
}

export class AcceptLiveRequestCompleteAction implements Action {
    readonly type = ACCEPT_LIVE_REQUEST_COMPLETE;

    constructor(public liveRequest: LiveRequest) { }
}

export class ReceiveAcceptAction implements Action {
    readonly type = RECEIVE_ACCEPT_REQUEST;

    constructor(public liveRequest: LiveRequest) { }
}

export type Actions
    = AcceptLiveRequestAction
    | AcceptLiveRequestCompleteAction
    | ReceiveAcceptAction;