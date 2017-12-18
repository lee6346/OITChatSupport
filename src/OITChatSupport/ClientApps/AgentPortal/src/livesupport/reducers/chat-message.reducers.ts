import { Activity } from 'botframework-directlinejs';
import { MessageFilter, FilterType, MessageSender } from '../models';
import * as directLineMessage from '../actions/chat-message.actions';
import { THREAD_REMOVED, ThreadRemovedAction } from '../actions/chat-thread.actions';
import { Map } from 'immutable';

export interface State {
    messages: Map<string, Activity[]>;
}

export interface UiState {
    filterText: string;
    filterBot: boolean;
    filterAgent: boolean;
    filterStudent: boolean;
}

export const initialState: State = {
    messages: Map<string, Activity[]>()
};

export const initialUiState: UiState = {
    filterText: '',
    filterBot: false,
    filterAgent: false,
    filterStudent: false
};

export function reducer(state = initialState, action: directLineMessage.Actions | ThreadRemovedAction): State {
    const getActByThread = (threadId: string) => [...state.messages.get(threadId, [])];
    const getConversationIdByActivity = (activity: Activity) => typeof activity.conversation !== 'undefined' ? activity.conversation.id : '';

    switch (action.type) {
        case directLineMessage.CACHED_MESSAGES_LOADED:
            return Object.assign({}, state, {
                messages: state.messages
                    .set(action.cachedLoad.threadId, [...action.cachedLoad.cachedMessageSet, ...getActByThread(action.cachedLoad.threadId)])
            });
        case directLineMessage.MESSAGE_ACTIVITY_SENT:
        case directLineMessage.MESSAGE_ACTIVITY_RECEIVED:
            let recId = getConversationIdByActivity(action.activity);
            return Object.assign({}, state, {
                messages: state.messages.set(recId, [...getActByThread(recId), action.activity])
            });
        case THREAD_REMOVED:
            return Object.assign({}, state, {
                messages: state.messages.remove(action.threadId)
            });
        default:
            return state;
    }
}

export function uiReducer(state = initialUiState, action: directLineMessage.Actions): UiState {

    switch (action.type) {
        case directLineMessage.FILTER_AGENT_MESSAGE:
            return Object.assign({}, state, {
                filterAgent: !state.filterAgent,
                filterBot: state.filterBot,
                filterStudent: state.filterStudent,
                filterText: state.filterText
            });
        case directLineMessage.FILTER_MESSAGE_TEXT:
            return Object.assign({}, state, {
                filterAgent: state.filterAgent,
                filterBot: state.filterBot,
                filterStudent: state.filterStudent,
                filterText: action.text
            });
        case directLineMessage.FILTER_BOT_MESSAGE:
            return Object.assign({}, state, {
                filterAgent: state.filterAgent,
                filterBot: !state.filterBot,
                filterStudent: state.filterStudent,
                filterText: state.filterText
            });
        case directLineMessage.FILTER_STUDENT_MESSAGE:
            return Object.assign({}, state, {
                filterAgent: state.filterAgent,
                filterBot: state.filterBot,
                filterStudent: !state.filterStudent,
                filterText: state.filterText
            });
        default:
            return initialUiState;
    }
}


export const getMessageFilterText = (state: UiState) => state.filterText;
