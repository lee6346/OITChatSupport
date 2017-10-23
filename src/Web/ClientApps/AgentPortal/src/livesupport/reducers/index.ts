import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromThreads from './directline-thread.reducers';
import * as fromLiveRequests from './live-request.reducers';
import * as fromMessages from './directline-message.reducers';
import * as fromRoot from '../../shared/index';
import { List, Map } from 'immutable';
import { DirectLineMessage, DirectLineThread } from '../models';
import { DirectLineThreadVm } from '../viewmodels';
import { Activity } from 'botframework-directlinejs';
export interface LiveChatSupportState {
    liveRequests: fromLiveRequests.State;
    threads: fromThreads.State;
    uiThreads: fromThreads.UiState;
    messages: fromMessages.State;
}

export interface State extends fromRoot.State {
    'livechatsupport': LiveChatSupportState;
}

export const reducers = {
    liveRequests: fromLiveRequests.reducer,
    threads: fromThreads.reducer,
    messages: fromMessages.reducer,
    uiThreads: fromThreads.uiReducer,
};

export const getLiveChatSupportState = createFeatureSelector<LiveChatSupportState>('livechatsupport');

// selector for each table
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

export const getUiThreadEntitiesState = createSelector(
    getLiveChatSupportState,
    state => state.uiThreads
);

// selector for list of live requests
export const getLiveRequestList = createSelector(
    getLiveRequestEntitiesState,
    fromLiveRequests.getPendingRequests
);

export const getAllThreads = createSelector(
    getThreadEntitiesState,
    state => state.threads.toList()
);

// selector for thread ID
export const getSelectedThreadId = createSelector(
    getThreadEntitiesState,
    fromThreads.getSelectedThreadId
);

// selector to current thread
export const getSelectedThread = createSelector(
    getThreadEntitiesState,
    fromThreads.getSelectedThread,
);

export const getSelectedThreadMessages = createSelector(
    getMessageEntitiesState,
    getSelectedThreadId,
    (messages, threadId) => messages.messages.filter((message: DirectLineMessage) => message.conversationId === threadId).toList(),
);

export const getSelectedThreadCachedMessages = createSelector(
    getMessageEntitiesState,
    getSelectedThreadId,
    (messages, threadId) => messages.cachedMessages.filter((activity: Activity) => typeof activity.conversation !== 'undefined' && activity.conversation.id === threadId)
);

export const getSelectedThreadMessages2 = createSelector(
    getMessageEntitiesState,
    fromThreads.getSelectedThreadMessageIds,
    (messages, messageIds) => messageIds.map(id => messages.messages.get(id))  
);


// ui state threads selectors
export const getUiThreadList = createSelector(
    getUiThreadEntitiesState,
    (state) => state.threadsUi.toList()
);
