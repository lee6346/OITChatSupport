import { Action } from '@ngrx/store';
import { LiveRequest, RemoveRequest } from '../models';
import { Conversation } from 'botframework-directlinejs';

export const ACCEPT_LIVE_REQUEST = '[Request] ACCEPT_LIVE_REQUEST';
export const LIVE_REQUEST_ACCEPTED = '[Request] LIVE_REQUEST_ACCEPTED';
export const LIVE_REQUEST_REMOVED = '[Request] LIVE_REQUEST_REMOVED';
export const LIVE_REQUEST_RECEIVED = '[Request] LIVE_REQUEST_RECEIVED';
export const LOAD_LIVE_REQUESTS = '[Request] LOAD_LIVE_REQUESTS';
export const LIVE_REQUESTS_LOADED = '[Request] LIVE_REQUESTS_LOADED';

//UI actions
export const EXPAND_REQUEST_VIEW = '[Request] EXPAND_REQUEST_VIEW';

export class AcceptLiveRequestAction implements Action {
    readonly type = ACCEPT_LIVE_REQUEST;
    constructor(public liveRequest: LiveRequest) { }
}
export class LiveRequestAcceptedAction implements Action {
    readonly type = LIVE_REQUEST_ACCEPTED;
    constructor(public conversation: Conversation, public bot: string){}
}

export class LiveRequestRemovedAction implements Action {
    readonly type = LIVE_REQUEST_REMOVED;
    constructor(public removeRequest: RemoveRequest) { }
}
export class LiveRequestReceivedAction implements Action {
    readonly type = LIVE_REQUEST_RECEIVED;
    constructor(public liveRequest: LiveRequest) { }
}
export class LoadLiveRequestsAction implements Action {
    readonly type = LOAD_LIVE_REQUESTS;
    constructor() { }
}
export class LiveRequestsLoadedAction implements Action {
    readonly type = LIVE_REQUESTS_LOADED;
    constructor(public liveRequest: LiveRequest[]) { }

}

export class ExpandRequestViewAction implements Action {
    readonly type = EXPAND_REQUEST_VIEW;
    constructor(public expand: boolean) { }
}

export type Actions
    = AcceptLiveRequestAction
    | LiveRequestAcceptedAction
    | LiveRequestRemovedAction
    | LiveRequestReceivedAction
    | LoadLiveRequestsAction
    | LiveRequestsLoadedAction
    | ExpandRequestViewAction;