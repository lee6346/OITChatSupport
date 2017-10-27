import { Action } from '@ngrx/store';

//app state: number of subscribers (pending list, thread list, etc), boolean: active, current interval

// will start the timer in the service to emit at n second intervals
export const INITIALIZE_TIMER = '[Timer] INITIALIZE_TIMER';
//will set the state boolean-> timer active to true
export const TIMER_INITIALIZED = '[Timer] TIMER_INITIALIZED';
//will change the timer interval
export const CHANGE_SECOND_INTERVAL = '[Timer] CHANGE_SECOND_INTERVAL';
export const SECOND_INTERVAL_CHANGED = '[Timer] SECOND_INTERVAL_CHANGED';
//when the first component of the timer interested container is initialized
export const ADD_TIME_SUBSCRIBER = '[Timer] ADD_TIME_SUBSCRIBER';
export const TIME_SUBSCRIBER_ADDED = '[Timer] TIME_SUBSCRIBER_ADDED';

//when the length of a pending list, etc no longer has 
export const REMOVE_TIME_SUBSCRIBER = '[Timer] REMOVE_TIME_SUBSCRIBER';
export const TIME_SUBSCRIBER_REMOVED = '[Timer] TIME_SUBSCRIBER_REMOVED';

export const EMIT_SECOND_INTERVAL = '[Timer] EMIT_SECOND_INTERVAL';


export class InitializeTimerAction implements Action {
    readonly type = INITIALIZE_TIMER;
    constructor(public interval: number) { }
}

export class TimerInitializedAction implements Action {
    readonly type = TIMER_INITIALIZED;
    constructor(public interval: number) { }
}

export class ChangeSecondIntervalAction implements Action {
    readonly type = CHANGE_SECOND_INTERVAL;
    constructor(public interval: number) { }
}
export class SecondIntervalChangedAction implements Action {
    readonly type = SECOND_INTERVAL_CHANGED;
    constructor(public interval: number) { }
}

export class AddTimeSubscriberAction implements Action{
    readonly type = ADD_TIME_SUBSCRIBER;
    constructor() { }
}

export class TimeSubscriberAddedAction implements Action {
    readonly type = TIME_SUBSCRIBER_ADDED;
    constructor() { }
}

export class RemoveTimeSubscriberAction implements Action {
    readonly type = REMOVE_TIME_SUBSCRIBER;
    constructor() { }
}

export class TimeSubscriberRemovedAction implements Action {
    readonly type = TIME_SUBSCRIBER_REMOVED;
    constructor() { }
}

export class EmitSecondIntervalAction implements Action {
    readonly type = EMIT_SECOND_INTERVAL;
    constructor(public seconds: number) { }
}

export type Actions
    = InitializeTimerAction
    | TimerInitializedAction
    | ChangeSecondIntervalAction
    | SecondIntervalChangedAction
    | AddTimeSubscriberAction
    | TimeSubscriberAddedAction
    | RemoveTimeSubscriberAction
    | TimeSubscriberRemovedAction
    | EmitSecondIntervalAction;