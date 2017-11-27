import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../shared/index';
import * as fromAuth from './auth.reducers';

export interface AuthState{
    status: fromAuth.State;
}

export interface State extends fromRoot.State {
    auth: AuthState;
}

export const reducers = {
    status: fromAuth.reducer
};

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getAuthStatusState = createSelector(
    getAuthState,
    state => state.status
);

export const getLoggedIn = createSelector(
    getAuthStatusState,
    fromAuth.getAuthenticated
);

export const getUsername = createSelector(
    getAuthStatusState,
    fromAuth.getUsername
);