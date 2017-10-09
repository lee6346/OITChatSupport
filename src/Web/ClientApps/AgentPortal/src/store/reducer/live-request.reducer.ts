import { Action, ActionReducer } from "@ngrx/store";
import { LiveRequestState } from "../state/live-request.state";
import { LiveRequest } from "../../shared/model/live-request.model";
import * as liveRequestAction from '../action/live-request.action';



export const initialState: LiveRequestState = {
    liveRequests: []
};


export function pendingListReducer(state = initialState, action: liveRequestAction.Actions): LiveRequestState {
    switch (action.type) {

        case liveRequestAction.RECEIVE_LIVE_REQUEST:
            return Object.assign({}, state, {
                pendingList: state.liveRequests.concat(action.liveRequest)
            });

        case liveRequestAction.RECEIVE_ACCEPT_REQUEST:
            return Object.assign({}, state, {
                pendingList: () => {
                    let x = state.liveRequests.findIndex(
                        item => item.conversationId === action.liveRequest.conversationId);
                    if (x !== -1)
                        state.liveRequests.splice(x, 1);
                    return state.liveRequests;
                }
            });

        default:
            return state;
    }
}