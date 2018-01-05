import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromChatMessages from './chat-message.reducers';
import * as fromChatStatus from './chat-status.reducers';
export var reducers = {
    chatMessages: fromChatMessages.reducer,
    chatStatus: fromChatStatus.reducer
};
export var getChatBotState = createFeatureSelector('chatbot');
export var getChatMessageEntitiesState = createSelector(getChatBotState, function (state) { return state.chatMessages; });
export var getChatStatusEntity = createSelector(getChatBotState, function (state) { return state.chatStatus; });
export var getMessages = createSelector(getChatMessageEntitiesState, function (state) { return state.messages; });
export var getDisconnectActivity = createSelector(getChatMessageEntitiesState, fromChatMessages.getDisconnectEvent);
export var getLastStudentMessage = createSelector(getChatMessageEntitiesState, fromChatMessages.getLastStudentMessage);
//# sourceMappingURL=index.js.map