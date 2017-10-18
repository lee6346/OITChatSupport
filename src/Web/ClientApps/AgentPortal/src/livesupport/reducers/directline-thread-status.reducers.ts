import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { DirectLineThreadStatus } from '../models/directline-thread-status.model';

import * as directLineSession from '../actions/directline-session.actions';
import * as directLineThread from '../actions/directline-thread.actions';

export interface State extends EntityState<DirectLineThreadStatus> {
    selectedThreadId: string | null;
}

export const adapter: EntityAdapter<DirectLineThreadStatus> = createEntityAdapter<DirectLineThreadStatus>({
    selectId: (directLineThreadStatus: DirectLineThreadStatus) => directLineThreadStatus.conversationId,
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
    selectedThreadId: null,
});

export function reducer(state = initialState, action: directLineThread.Actions | directLineSession.Actions): State {
    switch (action.type) {
        case directLineThread.SELECT_THREAD: {
            return {
                ...state,
                selectedThreadId: action.conversationId,
            };
        }
        case directLineThread.START_THREAD_COMPLETE: {
            return {
                ...state,
                selectedThreadId: action.directLineSession.conversationId,
            };
        }
        case directLineThread.THREAD_DISCONNECT_RECEIVED: {
            return {
                ...adapter.updateOne(, state),
                selectedThreadId: state.selectedThreadId,
            };
        }
        case directLineThread.REMOVE_THREAD: {
            return {
                ...adapter.removeOne(action.conversationId, state),
                selectedThreadId: state.selectedThreadId,
            };
        }
        case directLineSession.RECEIVE_SESSION_ACTIVITY: {
            return {
                ...adapter.updateOne(, state),
                selectedThreadId: state.selectedThreadId,
            };
        }
        case directLineSession.SEND_SESSION_ACTIVITY_COMPLETE: {
            return {
                ...adapter.updateOne(, state),
                selectedThreadId: state.selectedThreadId,
            };
        }
        default: {
            return state;
        }
    }
}

export const getSelectedId = (state: State) => state.selectedThreadId;