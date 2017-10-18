import { Action, ActionReducer } from "@ngrx/store";
import { LiveRequest } from "../../shared/model";
import * as liveRequestAction from '../action/live-request.action';

export interface LiveRequestsState {
    liveRequests: LiveRequest[];
    
}
export const initialLiveRequestState: LiveRequestsState = {
    liveRequests: []
};
export function liveRequestsReducer(state = initialLiveRequestState, action: liveRequestAction.Actions): LiveRequestsState {
    switch (action.type) {
        case liveRequestAction.RECEIVE_LIVE_REQUEST:
            return Object.assign({}, state, {
                liveRequests: [...state.liveRequests, action.liveRequest]//state.liveRequests.push(action.liveRequest)
            });
        case liveRequestAction.RECEIVE_REMOVE_REQUEST:
            return Object.assign({}, state, {
                liveRequests: (): LiveRequest[] => {
                    let x = state.liveRequests.findIndex(
                        item => item.conversationId === action.liveRequest.conversationId);
                    if (x !== -1)
                        state.liveRequests.splice(x, 1);
                    return [...state.liveRequests];
                }
            });
        case liveRequestAction.LOAD_PENDING_REQUESTS_COMPLETE:
            console.log('received the requests in the reducer!');
            return Object.assign({}, state, {
                liveRequests: action.liveRequest/*[...state.liveRequests, ...action.liveRequest]*/ //state.liveRequests.concat(action.liveRequest)
            });
        case liveRequestAction.ACCEPT_LIVE_REQUEST_COMPLETE:
            return Object.assign({}, state, {
                liveRequests: (): LiveRequest[] => {
                    let x = state.liveRequests.findIndex(
                        item => item.conversationId === action.conversationId);
                    if (x !== -1)
                        state.liveRequests.splice(x, 1);
                    return [...state.liveRequests];//state.liveRequests;
                }
            });
        default:
            return state;
    }
}
export const getLiveRequests = (state: LiveRequestsState) => state.liveRequests;