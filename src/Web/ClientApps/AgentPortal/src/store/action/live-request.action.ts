import { Action } from '@ngrx/store';
import { LiveRequest } from '../../shared/model';

export const ACCEPT_LIVE_REQUEST = '[liverequest] ACCEPT_LIVE_REQUEST';
export const ACCEPT_LIVE_REQUEST_COMPLETE = '[liverequest] ACCEPT_LIVE_REQUEST_COMPLETE';
export const RECEIVE_REMOVE_REQUEST = '[liverequest] RECEIVE_REMOVE_REQUEST';
export const RECEIVE_LIVE_REQUEST = '[liverequest] RECEIVE_LIVE_REQUEST';
export const LOAD_PENDING_REQUESTS = '[LiveRequest] LOAD_PENDING_REQUESTS';
export const LOAD_PENDING_REQUESTS_COMPLETE = '[LiveRequest] LOAD_PENDING_REQUESTS_COMPLETE';

export class AcceptLiveRequestAction implements Action {
    readonly type = ACCEPT_LIVE_REQUEST;
    constructor(public liveRequest: LiveRequest) { }
}
export class AcceptLiveRequestCompleteAction implements Action {
    readonly type = ACCEPT_LIVE_REQUEST_COMPLETE;
    constructor(public conversationId: string) { }
}
export class ReceiveRemoveRequestAction implements Action {
    readonly type = RECEIVE_REMOVE_REQUEST;
    constructor(public liveRequest: LiveRequest) { }
}
export class ReceiveLiveRequestAction implements Action {
    readonly type = RECEIVE_LIVE_REQUEST;
    constructor(public liveRequest: LiveRequest) { }
}
export class LoadPendingRequestsAction implements Action {
    readonly type = LOAD_PENDING_REQUESTS;
    constructor(public agentId: string) { }

}
export class LoadPendingRequestsCompleteAction implements Action {
    readonly type = LOAD_PENDING_REQUESTS_COMPLETE;
    constructor(public liveRequest: LiveRequest[]) { }

}
export type Actions
    = AcceptLiveRequestAction
    | AcceptLiveRequestCompleteAction
    | ReceiveRemoveRequestAction
    | ReceiveLiveRequestAction
    | LoadPendingRequestsAction
    | LoadPendingRequestsCompleteAction;