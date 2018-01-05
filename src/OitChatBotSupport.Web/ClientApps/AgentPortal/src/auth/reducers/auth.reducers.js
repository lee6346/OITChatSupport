import * as authActions from '../actions/auth.actions';
export var initialState = {
    authenticated: false,
    username: undefined
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case authActions.LOGIN_APPROVED:
            return Object.assign({}, state, {
                authenticated: true,
                username: action.user
            });
        case authActions.LOGOUT:
            return initialState;
        default:
            return state;
    }
}
export var getAuthenticated = function (state) { return state.authenticated; };
export var getUsername = function (state) { return state.username; };
//# sourceMappingURL=auth.reducers.js.map