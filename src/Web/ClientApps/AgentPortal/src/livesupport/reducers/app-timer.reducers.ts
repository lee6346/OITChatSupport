
import * as appTimer from '../actions/app-timer.actions';


export interface State {
    currentSeconds: number;
    timeInterval: number;
}

export const initialState: State = {
    currentSeconds: 0,
    timeInterval: 0,
};


export function reducer(state = initialState, action: appTimer.Actions): State {
    switch (action.type) {
        case appTimer.EMIT_SECOND_INTERVAL:
            return Object.assign({}, state, {
                currentSeconds: action.interval,
                timeInterval: state.timeInterval
            });
        case appTimer.SECOND_INTERVAL_CHANGED:
            return Object.assign({}, state, {
                currentSeconds: state.currentSeconds,
                timerInterval: action.interval
            });
        default:
            return state;
    }
}