import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromSessions from './directline-session.reducers';
import * as fromThreadStatus from './directline-thread-status.reducers';
import * as fromLiveRequests from './live-request.reducers';
import * as fromRoot from '../../store/index';

export interface LiveChatSupportState {
    liveRequests: fromLiveRequests.State;
    sessions: fromSessions.State;
    threadStatus: fromThreadStatus.State;
}

export interface State extends fromRoot.State {
    'livechatsupport': LiveChatSupportState;
}

export const reducers = {
    liveRequests: fromSessions.reducer,
    sessions: fromSessions.reducer,
    threadStatus: fromThreadStatus.reducer,
};


export const getLiveRequestsState = createFeatureSelector<LiveChatSupportState>('liverequests');

export const getLiveRequestEntitiesState = createSelector(
    getLiveRequestsState,
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


export const getSessionsState = createFeatureSelector<LiveChatSupportState>('sessions');

export const getSessionEntitiesState = createSelector(
    getSessionsState,
    state => state.sessions
);

export const getSelectedSessionId = createSelector(
    getSessionEntitiesState,
    fromSessions.getSelectedId
);

export const {
    selectIds: getSessionIds,
    selectEntities: getSessionEntities,
    selectAll: getAllSessions,
    selectTotal: getTotalSessions,
} = fromSessions.adapter.getSelectors(getSessionEntitiesState);

export const getSelectedSession = createSelector(
    getSessionEntities,
    getSelectedSessionId,
    (entities, selectedId) => {
        return selectedId && entities[selectedId];
    }
);


export const getThreadStatusState = createFeatureSelector<LiveChatSupportState>('threadstatus');
export const getThreadStatusEntitiesState = createSelector(
    getThreadStatusState,
    state => state.threadStatus
);

export const getSelectedThreadId = createSelector(
    getThreadStatusEntitiesState,
    fromThreadStatus.getSelectedId
);

export const {
    selectIds: getThreadStatusIds,
    selectEntities: getThreadStatusEntities,
    selectAll: getAllThreadStatus,
    selectTotal: getTotalThreads,
} = fromThreadStatus.adapter.getSelectors(getThreadStatusEntitiesState);

export const getSelectedThreadStatus = createSelector(
    getThreadStatusEntities,
    getSelectedSessionId,
    (entities, selectedId) => {
        return selectedId && entities[selectedId];
    }
);