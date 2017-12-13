import { Action } from '@ngrx/store';

import { ChatThread } from '../models';

export const THREAD_CREATED = '[Thread] THREAD_CREATED';
export const REMOVE_THREAD = '[Thread] REMOVE_THREAD';
export const THREAD_REMOVED = '[Thread] THREAD_REMOVED';
export const THREAD_DISCONNECTED = '[Thread] THREAD_DISCONNECTED'
export const SWITCH_THREAD = '[Thread] SWITCH_THREAD';

export class ThreadCreatedAction implements Action {
    readonly type = THREAD_CREATED;
    constructor(public thread: ChatThread) { }
}

export class ThreadDisconnectedAction implements Action {
    readonly type = THREAD_DISCONNECTED;
    constructor(public threadId: string) { }
}

export class RemoveThreadAction implements Action {
    readonly type = REMOVE_THREAD;
    constructor(public threadId: string) { }
}

export class ThreadRemovedAction implements Action {
    readonly type = THREAD_REMOVED;
    constructor(public threadId: string) { }
}

export class SwitchThreadAction implements Action {
    readonly type = SWITCH_THREAD;
    constructor(public threadId: string) { }
}

export type Actions
    = ThreadDisconnectedAction
    | RemoveThreadAction
    | ThreadRemovedAction
    | ThreadCreatedAction
    | SwitchThreadAction;