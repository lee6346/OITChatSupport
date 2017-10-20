import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromSessions from './directline-session.reducers';
import * as fromLiveRequests from './live-request.reducers';
import * as fromRoot from '../../shared/store/index';

export interface LiveChatSupportState {
    liveRequests: fromLiveRequests.State;
    sessions: fromSessions.State;
}

export interface State extends fromRoot.State {
    'livechatsupport': LiveChatSupportState;
}

export const reducers = {
    liveRequests: fromLiveRequests.liveRequestsReducer,
    sessions: fromSessions.reducer
};

export const getLiveChatSupportState = createFeatureSelector<LiveChatSupportState>('livechatsupport');

export const getLiveRequestEntitiesState = createSelector(
    getLiveChatSupportState,
    state => state.liveRequests
);

export const getSelectedConversationId = createSelector(
    getLiveRequestEntitiesState,
    fromLiveRequests.getSelectedId
);

export const {
    selectIds: getConversationIds,
    selectEntities: getLiveRequestEntities,
    selectAll: getAllRequests,
    selectTotal: getTotalPending,
} = fromLiveRequests.adapter.getSelectors(getLiveRequestEntitiesState);

export const getSelectedLiveRequest = createSelector(
    getLiveRequestEntities,
    getSelectedConversationId,
    (entities, selectedId) => {
        return selectedId && entities[selectedId];
    }
);

export const getSessionsState = createSelector(
    getLiveChatSupportState,
    (state: LiveChatSupportState) => state.sessions
);

export const getSelectedSessionId = createSelector(
    getSessionsState,
    fromSessions.getSelectedId
);

export const getSessionsThreads = createSelector(
    getSessionsState,
    fromSessions.getAllThreads
);

export const getSessionsMessages = createSelector(
    getSessionsState,
    fromSessions.getAllMessages
);

export const getCachedMessages = createSelector(
    getSessionsState,
    fromSessions.getAllCachedMessages
);

export const getCurrentMessages = createSelector(
    getSessionsState,
    fromSessions.getSelectedMessages
);

export const getCurrentThread = createSelector(
    getSessionsState,
    fromSessions.getSelectedThread
);

export const getCurrentThreadCachedMessages = createSelector(
    getSessionsState,
    fromSessions.getSelectedCachedMessages
);






