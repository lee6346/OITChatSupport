import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromThreads from './chat-thread.reducers';
import * as fromLiveRequests from './live-request.reducers';
import * as fromMessages from './chat-message.reducers';
import * as fromTimer from './app-timer.reducers';
import * as fromVolume from './app-volume.reducers';
import * as fromRoot from '../../shared/index';

export interface LiveChatSupportState {
    liveRequests: fromLiveRequests.State;
    liveRequestsUi: fromLiveRequests.UiState;
    threads: fromThreads.State;
    threadsUi: fromThreads.UiState;
    messages: fromMessages.State;
    messagesUi: fromMessages.UiState;
    timer: fromTimer.State;
    volume: fromVolume.State;
}

export interface State extends fromRoot.State {
    'livechatsupport': LiveChatSupportState;
}

export const reducers = {
    liveRequests: fromLiveRequests.reducer,
    liveRequestsUi: fromLiveRequests.uiReducer,
    threads: fromThreads.reducer,
    threadsUi: fromThreads.uiReducer,
    messages: fromMessages.reducer,
    messagesUi: fromMessages.uiReducer,
    timer: fromTimer.reducer,
    volume: fromVolume.reducer
};

export const getLiveChatSupportState = createFeatureSelector<LiveChatSupportState>('livechatsupport');

export const getLiveRequestEntitiesState = createSelector(
    getLiveChatSupportState,
    state => state.liveRequests
);

export const getLiveRequestUiState = createSelector(
    getLiveChatSupportState,
    state => state.liveRequestsUi
);

export const getThreadEntitiesState = createSelector(
    getLiveChatSupportState,
    state => state.threads
);

export const getThreadUiState = createSelector(
    getLiveChatSupportState,
    state => state.threadsUi
);

export const getMessageEntitiesState = createSelector(
    getLiveChatSupportState,
    state => state.messages
);

export const getMessageUiState = createSelector(
    getLiveChatSupportState,
    state => state.messagesUi
);

export const getTimerEntityState = createSelector(
    getLiveChatSupportState,
    state => state.timer
);

export const getVolumeEntityState = createSelector(
    getLiveChatSupportState,
    state => state.volume
);


export const getLiveRequestList = createSelector(
    getLiveRequestEntitiesState,
    entities => entities.liveRequests
);

export const getLiveRequestCount = createSelector(
    getLiveRequestEntitiesState,
    fromLiveRequests.getTotalRequests
);

export const getLiveRequestExpanded = createSelector(
    getLiveRequestUiState,
    fromLiveRequests.getExpandState
);

export const getThreadList = createSelector(
    getThreadEntitiesState,
    (state) => state.threads.toList()
);

export const getThreadsExpanded = createSelector(
    getThreadUiState,
    fromThreads.getExpandState
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


export const getMessageFilterText = createSelector(
    getMessageUiState,
    fromMessages.getMessageFilterText
);

export const getMessagesByTextQuery = createSelector(
    getMessageListBySelectedThread,
    fromMessages.getMessageFilterText,
    (messages, text) => messages.filter(message => message.type === 'message' && typeof message.text !== 'undefined' && message.text.includes(text))
);



export const getCurrentTime = createSelector(
    getTimerEntityState,
    state => state.currentSeconds
);

export const getTimerActiveStatus = createSelector(
    getTimerEntityState,
    state => state.active
);

export const getCurrentVolume = createSelector(
    getVolumeEntityState,
    fromVolume.getCurrentVolume
);

export const getVolumeEnabled = createSelector(
    getVolumeEntityState,
    fromVolume.getVolumeEnabled
);