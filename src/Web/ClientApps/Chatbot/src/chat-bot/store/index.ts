import * as fromChatMessages from './chat-message.reducers';
import * as fromChatStatus from './chat-status.reducers';
import * as fromRoot from '../../shared/index.reducer';
import { Message } from 'botframework-directlinejs';
import { createSelector, createFeatureSelector } from '@ngrx/store';


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

export const getChatStatusState = createSelector(
    getChatBotState,
    state => state.chatStatus
);


export const getCurrentBotThread = createSelector(
    getChatStatusState,
    fromChatStatus.getThreadId
);

export const getConnectionState = createSelector(
    getChatStatusState,
    state => state.connected
);

export const getLiveRequestStatus = createSelector(
    getChatStatusState,
    fromChatStatus.getRequestStatus
);

export const getMessageLog = createSelector(
    getChatMessageEntitiesState,
    state => state.messages
);

export const getDisconnectActivity = createSelector(
    getChatMessageEntitiesState,
    fromChatMessages.getDisconnectEvent
);

export const getLastMessageSet = createSelector(
    getMessageLog,
    log => log.takeLast(4)
);
export const getLastStudentMessage = createSelector(
    getChatMessageEntitiesState,
    fromChatMessages.getLastStudentMessage//state => state.messages.filter((msg: Message) => msg.from.id === 'student').last()
);