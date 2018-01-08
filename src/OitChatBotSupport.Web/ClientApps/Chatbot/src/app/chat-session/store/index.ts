import { createSelector, createFeatureSelector, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromChatSession from './chat-session.reducer';
import * as fromRoot from '../../shared/index.reducer';
import { ChatSessionState } from './chat-session.state';


export interface ChatBotState {
    chatSession: ChatSessionState;
}

export interface State extends fromRoot.State {
    'chatbot': ChatBotState;
}

export const reducers: ActionReducerMap<ChatBotState> = {
    chatSession: fromChatSession.reducer
};

export const getChatBotState = createFeatureSelector<ChatBotState>('chatbot');

export const getChatSessionEntity = createSelector(
    getChatBotState,
    state => state.chatSession
);

export const getMessages = createSelector(
    getChatSessionEntity,
    state => state.messages
);

export const getThreadId = createSelector(
    getChatSessionEntity,
    state => state.threadId
);

export const getPendingStatus = createSelector(
    getChatSessionEntity,
    state => state.agentStatus
);

export const getLastStudentMessage = createSelector(
    getMessages,
    state => state.reverse().find(message => message.from.id === 'student')
);