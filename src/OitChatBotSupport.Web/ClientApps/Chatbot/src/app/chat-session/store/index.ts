import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromChatMessages from './chat-message.reducers';
import * as fromChatStatus from './chat-status.reducers';
import * as fromRoot from '../../shared/index.reducer';

/**
 * The parent state for this module
 */
export interface ChatBotState {
    chatMessages: fromChatMessages.State;
    chatStatus: fromChatStatus.State;
}

/**
 * Extend the root state to include states for this module
 */
export interface State extends fromRoot.State {
    'chatbot': ChatBotState;
}

/**
 * The parent reducer 
 */
export const reducers = {
    chatMessages: fromChatMessages.reducer,
    chatStatus: fromChatStatus.reducer
};

/**
 * Selectors  to reference the state for this module
 * 
 * and subsets, combinations of the different states (like SQL Joins, etc)
 */
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