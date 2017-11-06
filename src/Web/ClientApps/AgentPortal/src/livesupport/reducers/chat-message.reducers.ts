import { Activity } from 'botframework-directlinejs';
import { MessageFilter, FilterType, MessageSender } from '../models';
import * as directLineMessage from '../actions/chat-message.actions';
import { THREAD_REMOVED, ThreadRemovedAction } from '../actions/chat-thread.actions';
import { Map, List } from 'immutable';

export interface State {
    messages: Map<string, Activity[]>;
}

export interface UiState {
    filterSender: List<MessageSender>;
    filterText: string;
}

export const initialState: State = {
    messages: Map<string, Activity[]>()
};

export const initialUiState: UiState = {
    filterSender: List<MessageSender>(),
    filterText: '',
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
        case directLineMessage.FILTER_MESSAGE_SENDER:
            return Object.assign({}, state, {
                filterSender: state.filterSender.push(action.sender),
                filterText: state.filterText
            });
        case directLineMessage.FILTER_MESSAGE_TEXT:
            return Object.assign({}, state, {
                filterType: state.filterSender,
                filterText: action.text
            });
        case directLineMessage.REMOVE_SENDER_FILTER:
            return Object.assign({}, state, {
                filterType: state.filterSender.filter(sender => sender !== action.sender),
                filterText: state.filterText
            });
        default:
            return initialUiState;
    }
}

export const getMessageFilterSender = (state: UiState) => state.filterSender;
export const getMessageFilterText = (state: UiState) => state.filterText;
