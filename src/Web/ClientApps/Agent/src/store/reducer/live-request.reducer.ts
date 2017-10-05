import { Action, ActionReducer } from "@ngrx/store";
import { PendingListState } from "../state/pending-list.state";
import { LiveRequest } from "../../model";
import * as liveRequestAction from '../action/live-request.action';

export const initialState: PendingListState = {
    pendingList: []
};


export function pendingListReducer(state = initialState, action: liveRequestAction.Actions): PendingListState {
    switch (action.type) {

        case liveRequestAction.RECEIVE_LIVE_REQUEST:
            return Object.assign({}, state, {
                pendingList: state.pendingList.concat(action.liveRequest)
            });

        case liveRequestAction.RECEIVE_ACCEPT_REQUEST:
            return Object.assign({}, state, {
                pendingList: () => {
                    let x = state.pendingList.findIndex(
                        item => item.conversationId === action.liveRequest.conversationId);
                    if (x !== -1)
                        state.pendingList.splice(x, 1);
                    return state.pendingList;
                }
            });

        default:
            return state;
    }
}