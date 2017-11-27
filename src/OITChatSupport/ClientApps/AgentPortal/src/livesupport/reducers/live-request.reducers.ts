import { LiveRequest } from '../models/live-request.model';
import * as liveRequest from '../actions/live-request.actions';
import { List } from 'immutable';

export interface State {
    liveRequests: List<LiveRequest>;
}

export interface UiState {
    expandView: boolean;
}

export const initialState: State = {
    liveRequests: List<LiveRequest>(),
};

export const initialUiState: UiState = {
    expandView: false
};

export function reducer(state = initialState, action: liveRequest.Actions): State {
    switch (action.type) {
        case liveRequest.LIVE_REQUEST_RECEIVED:
            return Object.assign({}, state, {
                liveRequests: state.liveRequests.push(action.liveRequest),
            });
        case liveRequest.LIVE_REQUEST_REMOVED:
            return Object.assign({}, state, {
                liveRequests: state.liveRequests.filter((request: LiveRequest) =>
                    request.conversationId !== action.liveRequest.conversationId),
            });
        case liveRequest.LIVE_REQUESTS_LOADED:
            return Object.assign({}, state, {
                liveRequests: state.liveRequests.concat(action.liveRequest)
            });
        default:
            return state;
    }
}

export const getTotalRequests = (state: State) => state.liveRequests.count;
export const getPendingRequests = (state: State) => state.liveRequests;

export function uiReducer(state = initialUiState, action: liveRequest.Actions): UiState {
    switch (action.type) {
        case liveRequest.EXPAND_REQUEST_VIEW:
            return Object.assign({}, state, {
                expandView: action.expand
            });
        default:
            return state;
    }
}

export const getExpandState = (state: UiState) => state.expandView;