import { Action, ActionReducer } from "@ngrx/store";
import { LiveRequest } from "../../shared/model";
import { LiveRequestsState, initialLiveRequestState } from '../app-data.store';
import * as liveRequestAction from '../action/live-request.action';


export function liveRequestsReducer(state = initialLiveRequestState, action: liveRequestAction.Actions): LiveRequestsState {

    switch (action.type) {

        case liveRequestAction.RECEIVE_LIVE_REQUEST:
            return Object.assign({}, state, {
                liveRequests: state.liveRequests.push(action.liveRequest)
            });

        case liveRequestAction.RECEIVE_REMOVE_REQUEST:
            return Object.assign({}, state, {
                liveRequests: () => {
                    let x = state.liveRequests.findIndex(
                        item => item.conversationId === action.liveRequest.conversationId);
                    if (x !== -1)
                        state.liveRequests.splice(x, 1);
                    return state.liveRequests;
                }
            });

        case liveRequestAction.LOAD_PENDING_REQUESTS_COMPLETE:
            return Object.assign({}, state, {
                liveRequests: state.liveRequests.concat(action.liveRequest)
            });

        case liveRequestAction.ACCEPT_LIVE_REQUEST_COMPLETE:
            return Object.assign({}, state, {
                liveRequests: () => {
                    let x = state.liveRequests.findIndex(
                        item => item.conversationId === action.conversationId);
                    if (x !== -1)
                        state.liveRequests.splice(x, 1);
                    return state.liveRequests;
                }
            });

        default:
            return state;
    }
}