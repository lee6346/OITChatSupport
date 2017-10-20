import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { LiveRequest } from '../models/live-request.model';
import * as liveRequest from '../actions/live-request.actions';
import { Dictionary } from "@ngrx/entity/src/models";


export interface State extends EntityState<LiveRequest> {
    selectedConversationId: string | null;
}

export const adapter: EntityAdapter<LiveRequest> = createEntityAdapter<LiveRequest>({
    selectId: (liveRequest: LiveRequest) => liveRequest.conversationId,
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
    selectedConversationId: null,
});

export function liveRequestsReducer(state = initialState, action: liveRequest.Actions): State {
    switch (action.type) {
        case liveRequest.RECEIVE_LIVE_REQUEST: {
            return {
                ...adapter.addOne(action.liveRequest, state),
                selectedConversationId: state.selectedConversationId,
            };
        }
        case liveRequest.RECEIVE_REMOVE_REQUEST: {
            return {
                ...adapter.removeOne(action.liveRequest.conversationId, state),
                selectedConversationId: state.selectedConversationId,
            };
        }
        case liveRequest.LOAD_PENDING_REQUESTS_COMPLETE: {
            console.log('received the requests in the reducer!');
            return {
                ...adapter.addMany(action.liveRequest, state),
                selectedConversationId: state.selectedConversationId,
            };
        }
        default:
            return state;
    }
}
export const getSelectedId = (state: State) => state.selectedConversationId;