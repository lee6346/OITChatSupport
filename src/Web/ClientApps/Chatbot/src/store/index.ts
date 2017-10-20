import * as fromChatBot from './chat-bot.reducer';
import * as fromRoot from '../shared/index.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';


export interface ChatBotState {
    chatBot: fromChatBot.State;
}

export interface State extends fromRoot.State {
    'chatbot': fromChatBot.State;
}

export const reducers = {
    chatBot: fromChatBot.reducer
};

export const getChatBotState = createFeatureSelector<ChatBotState>('chatbot');

export const getCurrentBotThread = createSelector(
    getChatBotState,
    state => state.chatBot.conversationId
);

export const getMessageLog = createSelector(
    getChatBotState,
    state => state.chatBot.messages
);

export const getTargetListener = createSelector(
    getChatBotState,
    state => state.chatBot.agent ? state.chatBot.agent : state.chatBot.botHandler
);