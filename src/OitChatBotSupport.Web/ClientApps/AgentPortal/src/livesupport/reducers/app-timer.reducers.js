import * as appTimer from '../actions/app-timer.actions';
export var initialState = {
    currentSeconds: 0,
    active: true,
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case appTimer.EMIT_SECOND_INTERVAL:
            return Object.assign({}, state, {
                currentSeconds: action.interval,
                timeInterval: state.active
            });
        default:
            return state;
    }
}
//# sourceMappingURL=app-timer.reducers.js.map