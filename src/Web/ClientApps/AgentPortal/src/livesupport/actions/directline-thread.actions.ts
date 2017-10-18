import { Action } from '@ngrx/store';
import { Activity } from 'botframework-directlinejs';
import { DirectLineSession } from '../models';

export const START_THREAD = '[Thread] START_THREAD';
export const START_THREAD_COMPLETE = '[Thread] START_THREAD_COMPLETE';
export const SELECT_THREAD = '[Thread] SELECT_THREAD';
export const REMOVE_THREAD = '[Thread] END_THREAD';
export const THREAD_DISCONNECT_RECEIVED = '[Thread] THREAD_DISCONNECT_RECEIVED';

export class StartThreadAction implements Action {
    readonly type = START_THREAD;
    constructor(public conversationId: string) { }
}

export class StartThreadCompleteAction implements Action {
    readonly type = START_THREAD_COMPLETE;
    constructor(public directLineSession: DirectLineSession) { }
}

export class SelectThreadAction implements Action {
    readonly type = SELECT_THREAD;
    constructor(public conversationId: string) { }
}

export class RemoveThreadAction implements Action {
    readonly type = REMOVE_THREAD;
    constructor(public conversationId: string) { }
}

export class ThreadDisconnectReceived implements Action {
    readonly type = THREAD_DISCONNECT_RECEIVED;
    constructor(public conversationId: string) { }
}

export type Actions
    = StartThreadAction
    | StartThreadCompleteAction
    | SelectThreadAction
    | RemoveThreadAction
    | ThreadDisconnectReceived;
