import { Action } from '@ngrx/store';

export const INITIALIZE_TIMER = '[Timer] INITIALIZE_TIMER';
export const EMIT_SECOND_INTERVAL = '[Timer] EMIT_SECOND_INTERVAL';

export class EmitSecondIntervalAction implements Action {
    readonly type = EMIT_SECOND_INTERVAL;
    constructor(public interval: number) { }
}

export class InitializeTimerAction implements Action {
    readonly type = INITIALIZE_TIMER;
    constructor(public interval: number) { }
}

export type Actions
    = EmitSecondIntervalAction
    | InitializeTimerAction;