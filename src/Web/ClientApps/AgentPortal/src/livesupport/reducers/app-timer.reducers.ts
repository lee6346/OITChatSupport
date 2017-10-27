
import * as appTimer from '../actions/app-timer.actions';


export interface State {
    currentSeconds: number;
    active: boolean;
    timeInterval: number;
}

export const initialState: State = {
    currentSeconds: 0,
    active: false,
    timeInterval: 0,
};


export function reducer(state = initialState, action: appTimer.Actions): State {
    switch (action.type) {
        case appTimer.EMIT_SECOND_INTERVAL:
            return Object.assign({}, state, {
                currentSeconds: action.seconds,
                active: state.active,
                timeInterval: state.timeInterval
            });
        case appTimer.TIMER_INITIALIZED:
            return Object.assign({}, state, {
                currentSeconds: state.currentSeconds,
                active: true,
                timeInterval: action.interval
            });
        case appTimer.SECOND_INTERVAL_CHANGED:
            return Object.assign({}, state, {
                currentSeconds: state.currentSeconds,
                active: state.active,
                timerInterval: action.interval
            });
        default:
            return state;
    }
}