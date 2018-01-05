import * as liveRequest from '../actions/live-request.actions';
import { List } from 'immutable';
export var initialState = {
    liveRequests: List(),
};
export var initialUiState = {
    expandView: false
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case liveRequest.LIVE_REQUEST_RECEIVED:
            return Object.assign({}, state, {
                liveRequests: state.liveRequests.push(action.liveRequest),
            });
        case liveRequest.LIVE_REQUEST_REMOVED:
            return Object.assign({}, state, {
                liveRequests: state.liveRequests.filter(function (request) {
                    return request.conversationId !== action.removeRequest.conversationId;
                }),
            });
        case liveRequest.LIVE_REQUESTS_LOADED:
            return Object.assign({}, state, {
                liveRequests: state.liveRequests.concat(action.liveRequest)
            });
        default:
            return state;
    }
}
export var getTotalRequests = function (state) { return state.liveRequests.count; };
export var getPendingRequests = function (state) { return state.liveRequests; };
export function uiReducer(state, action) {
    if (state === void 0) { state = initialUiState; }
    switch (action.type) {
        case liveRequest.EXPAND_REQUEST_VIEW:
            return Object.assign({}, state, {
                expandView: action.expand
            });
        default:
            return state;
    }
}
export var getExpandState = function (state) { return state.expandView; };
//# sourceMappingURL=live-request.reducers.js.map