import { Action } from '@ngrx/store';

export const CHANGE_SECOND_INTERVAL = '[Timer] CHANGE_SECOND_INTERVAL';
export const SECOND_INTERVAL_CHANGED = '[Timer] SECOND_INTERVAL_CHANGED';
export const EMIT_SECOND_INTERVAL = '[Timer] EMIT_SECOND_INTERVAL';


export class ChangeSecondIntervalAction implements Action {
    readonly type = CHANGE_SECOND_INTERVAL;
    constructor(public interval: number) { }
}

export class EmitSecondIntervalAction implements Action {
    readonly type = EMIT_SECOND_INTERVAL;
    constructor(public interval: number) { }
}

export class SecondIntervalChangedAction implements Action {
    readonly type = SECOND_INTERVAL_CHANGED;
    constructor(public interval: number) { }
}

export type Actions
    = ChangeSecondIntervalAction
    | SecondIntervalChangedAction
    | EmitSecondIntervalAction;