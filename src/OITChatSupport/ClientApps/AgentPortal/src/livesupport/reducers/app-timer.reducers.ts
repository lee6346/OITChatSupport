
import * as appTimer from '../actions/app-timer.actions';


export interface State {
    currentSeconds: number;
    active: boolean;
}

export const initialState: State = {
    currentSeconds: 0,
    active: true,
};


export function reducer(state = initialState, action: appTimer.Actions): State {
    switch (action.type) {
        case appTimer.EMIT_SECOND_INTERVAL:
            return Object.assign({}, state, {
                currentSeconds: action.interval,
                timeInterval: state.active
            });
        case appTimer.ENABLE_TIMER:
            return Object.assign({}, state, {
                currentSeconds: state.currentSeconds,
                timerInterval: action.enable
            });
        default:
            return state;
    }
}