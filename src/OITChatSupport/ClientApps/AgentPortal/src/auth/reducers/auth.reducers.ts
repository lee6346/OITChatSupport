import * as authActions from '../actions/auth.actions';

export interface State {
    authenticated: boolean;
    username: string | undefined;
}

export const initialState: State = {
    authenticated: false,
    username: undefined
};


export function reducer(state = initialState, action: authActions.Actions): State {

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

export const getAuthenticated = (state: State) => state.authenticated;
export const getUsername = (state: State) => state.username;