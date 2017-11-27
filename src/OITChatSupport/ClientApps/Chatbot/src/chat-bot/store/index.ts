import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromChatMessages from './chat-message.reducers';
import * as fromChatStatus from './chat-status.reducers';
import * as fromRoot from '../../shared/index.reducer';

export interface ChatBotState {
    chatMessages: fromChatMessages.State;
    chatStatus: fromChatStatus.State;
}

export interface State extends fromRoot.State {
    'chatbot': ChatBotState;
}

export const reducers = {
    chatMessages: fromChatMessages.reducer,
    chatStatus: fromChatStatus.reducer
};

export const getChatBotState = createFeatureSelector<ChatBotState>('chatbot');

export const getChatMessageEntitiesState = createSelector(
    getChatBotState,
    state => state.chatMessages
);

export const getChatStatusEntity = createSelector(
    getChatBotState,
    state => state.chatStatus
);

export const getMessages = createSelector(
    getChatMessageEntitiesState,
    state => state.messages
);

export const getDisconnectActivity = createSelector(
    getChatMessageEntitiesState,
    fromChatMessages.getDisconnectEvent
);

export const getLastStudentMessage = createSelector(
    getChatMessageEntitiesState,
    fromChatMessages.getLastStudentMessage
);