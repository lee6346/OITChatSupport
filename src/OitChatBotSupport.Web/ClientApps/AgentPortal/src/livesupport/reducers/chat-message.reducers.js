import * as directLineMessage from '../actions/chat-message.actions';
import { THREAD_REMOVED } from '../actions/chat-thread.actions';
import { Map } from 'immutable';
export var initialState = {
    messages: Map()
};
export var initialUiState = {
    filterText: '',
    filterBot: false,
    filterAgent: false,
    filterStudent: false
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var getActByThread = function (threadId) { return state.messages.get(threadId, []).slice(); };
    var getConversationIdByActivity = function (activity) { return typeof activity.conversation !== 'undefined' ? activity.conversation.id : ''; };
    switch (action.type) {
        case directLineMessage.CACHED_MESSAGES_LOADED:
            return Object.assign({}, state, {
                messages: state.messages
                    .set(action.cachedLoad.threadId, action.cachedLoad.cachedMessageSet.concat(getActByThread(action.cachedLoad.threadId)))
            });
        case directLineMessage.MESSAGE_ACTIVITY_SENT:
        case directLineMessage.MESSAGE_ACTIVITY_RECEIVED:
            var recId = getConversationIdByActivity(action.activity);
            return Object.assign({}, state, {
                messages: state.messages.set(recId, getActByThread(recId).concat([action.activity]))
            });
        case THREAD_REMOVED:
            return Object.assign({}, state, {
                messages: state.messages.remove(action.threadId)
            });
        default:
            return state;
    }
}
export function uiReducer(state, action) {
    if (state === void 0) { state = initialUiState; }
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
export var getMessageFilterText = function (state) { return state.filterText; };
//# sourceMappingURL=chat-message.reducers.js.map