import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducers';
export var reducers = {
    status: fromAuth.reducer
};
export var getAuthState = createFeatureSelector('auth');
export var getAuthStatusState = createSelector(getAuthState, function (state) { return state.status; });
export var getLoggedIn = createSelector(getAuthStatusState, fromAuth.getAuthenticated);
export var getUsername = createSelector(getAuthStatusState, fromAuth.getUsername);
//# sourceMappingURL=index.js.map