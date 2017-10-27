import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromThreads from './chat-thread.reducers';
import * as fromLiveRequests from './live-request.reducers';
import * as fromMessages from './chat-message.reducers';
import * as fromTimer from './app-timer.reducers';
import * as fromRoot from '../../shared/index';

export interface LiveChatSupportState {
    liveRequests: fromLiveRequests.State;
    threads: fromThreads.State;
    messages: fromMessages.State;
    timer: fromTimer.State;
}

export interface State extends fromRoot.State {
    'livechatsupport': LiveChatSupportState;
}

export const reducers = {
    liveRequests: fromLiveRequests.reducer,
    threads: fromThreads.reducer,
    messages: fromMessages.reducer,
    timer: fromTimer.reducer
};

export const getLiveChatSupportState = createFeatureSelector<LiveChatSupportState>('livechatsupport');

export const getLiveRequestEntitiesState = createSelector(
    getLiveChatSupportState,
    state => state.liveRequests
);

export const getThreadEntitiesState = createSelector(
    getLiveChatSupportState,
    state => state.threads
);

export const getMessageEntitiesState = createSelector(
    getLiveChatSupportState,
    state => state.messages
);

export const getTimerEntityState = createSelector(
    getLiveChatSupportState,
    state => state.timer
);

export const getLiveRequestList = createSelector(
    getLiveRequestEntitiesState,
    entities => entities.liveRequests
);

export const getThreadList = createSelector(
    getThreadEntitiesState,
    state => state.threads.toList()
);

export const getSelectedThreadId = createSelector(
    getThreadEntitiesState,
    entities => entities.selectedThreadId
);

export const getSelectedThread = createSelector(
    getThreadEntitiesState,
    fromThreads.getSelectedThread,
);

export const getMessageListBySelectedThread = createSelector(
    getMessageEntitiesState,
    getSelectedThreadId,
    (messageSets, id) => messageSets.messages.get(id, [])
);

export const getCurrentTime = createSelector(
    getTimerEntityState,
    state => state.currentSeconds
);