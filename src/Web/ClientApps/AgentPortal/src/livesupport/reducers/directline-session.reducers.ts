import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { DirectLineSession } from '../models/directline-session.model';

import * as directLineThread from '../actions/directline-thread.actions';
import * as directLineSession from '../actions/directline-session.actions';

export interface State extends EntityState<DirectLineSession> {
    selectedSessionId: string | null;
}


export const adapter: EntityAdapter<DirectLineSession> = createEntityAdapter<DirectLineSession>({
    selectId: (directLineSession: DirectLineSession) => directLineSession.conversationId,
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
    selectedSessionId: null
});

export function reducer(state = initialState, action: directLineThread.Actions | directLineSession.Actions) {
    switch (action.type) {
        case directLineSession.RECEIVE_SESSION_ACTIVITY: {
            return {
                ...adapter.updateOne(, state),
                selectedSessionId: state.selectedSessionId,
            };
        }
        case directLineSession.SEND_SESSION_ACTIVITY_COMPLETE: {
            return {
                ...adapter.updateOne(, state),
                selectedSessionId: state.selectedSessionId,
            };
        }
        case directLineThread.REMOVE_THREAD: {
            return {
                ...adapter.removeOne(action.conversationId, state),
                selectedSessionId: state.selectedSessionId,
            };
        }
        case directLineThread.SELECT_THREAD: {
            return {
                ...state,
                selectedSessionId: action.conversationId,
            };
        }
        case directLineThread.START_THREAD_COMPLETE: {
            return {
                ...adapter.addOne(action.directLineSession, state),
                selectedSessionId: action.directLineSession.conversationId,
            };
        }
        default: {
            return state;
        }
    }
}

export const getSelectedId = (state: State) => state.selectedSessionId;