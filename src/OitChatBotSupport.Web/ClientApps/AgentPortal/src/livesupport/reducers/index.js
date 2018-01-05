import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromThreads from './chat-thread.reducers';
import * as fromLiveRequests from './live-request.reducers';
import * as fromMessages from './chat-message.reducers';
import * as fromTimer from './app-timer.reducers';
export var reducers = {
    liveRequests: fromLiveRequests.reducer,
    liveRequestsUi: fromLiveRequests.uiReducer,
    threads: fromThreads.reducer,
    messages: fromMessages.reducer,
    messagesUi: fromMessages.uiReducer,
    timer: fromTimer.reducer,
};
export var getLiveChatSupportState = createFeatureSelector('livechatsupport');
export var getLiveRequestEntitiesState = createSelector(getLiveChatSupportState, function (state) { return state.liveRequests; });
export var getLiveRequestUiState = createSelector(getLiveChatSupportState, function (state) { return state.liveRequestsUi; });
export var getThreadEntitiesState = createSelector(getLiveChatSupportState, function (state) { return state.threads; });
export var getMessageEntitiesState = createSelector(getLiveChatSupportState, function (state) { return state.messages; });
export var getMessageUiState = createSelector(getLiveChatSupportState, function (state) { return state.messagesUi; });
export var getTimerEntityState = createSelector(getLiveChatSupportState, function (state) { return state.timer; });
export var getLiveRequestList = createSelector(getLiveRequestEntitiesState, function (entities) { return entities.liveRequests; });
export var getLiveRequestCount = createSelector(getLiveRequestEntitiesState, fromLiveRequests.getTotalRequests);
export var getLiveRequestExpanded = createSelector(getLiveRequestUiState, fromLiveRequests.getExpandState);
export var getThreadList = createSelector(getThreadEntitiesState, function (state) { return state.threads.toList(); });
export var getSelectedThreadId = createSelector(getThreadEntitiesState, function (entities) { return entities.selectedThreadId; });
export var getSelectedThread = createSelector(getThreadEntitiesState, fromThreads.getSelectedThread);
export var getMessageListBySelectedThread = createSelector(getMessageEntitiesState, getSelectedThreadId, function (messageSets, id) { return messageSets.messages.get(id, []); });
export var getMessageFilterText = createSelector(getMessageUiState, fromMessages.getMessageFilterText);
export var getMessagesByTextQuery = createSelector(getMessageListBySelectedThread, fromMessages.getMessageFilterText, function (messages, text) { return messages.filter(function (message) { return message.type === 'message' && typeof message.text !== 'undefined' && message.text.includes(text); }); });
export var getCurrentTime = createSelector(getTimerEntityState, function (state) { return state.currentSeconds; });
export var getTimerActiveStatus = createSelector(getTimerEntityState, function (state) { return state.active; });
//# sourceMappingURL=index.js.map