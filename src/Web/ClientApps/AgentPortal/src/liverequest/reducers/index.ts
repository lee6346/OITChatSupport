import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromLiveRequests from './live-request.reducers';
import * as fromRoot from '../../store/index';

export interface LiveRequestsState {
    liveRequests: fromLiveRequests.State;
}

export interface State extends fromRoot.State {
    'liverequests': LiveRequestsState;
}

export const reducers = {
    liveRequests: fromLiveRequests.liveRequestsReducer
};

export const getLiveRequestsState = createFeatureSelector<LiveRequestsState>('liverequests');

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

