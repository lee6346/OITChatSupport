import { Map } from 'immutable';
import * as chatThread from '../actions/chat-thread.actions';
import { MESSAGE_ACTIVITY_RECEIVED } from '../actions/chat-message.actions';
export var initialState = {
    selectedThreadId: '',
    threads: Map(),
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case chatThread.THREAD_REMOVED:
            return Object.assign({}, state, {
                selectedThreadId: action.threadId === state.selectedThreadId ? state.threads.first().threadId : state.selectedThreadId,
                threads: state.threads.remove(action.threadId)
            });
        case chatThread.SWITCH_THREAD:
            return Object.assign({}, state, {
                selectedThreadId: action.threadId,
                threads: state.threads.update(action.threadId, function (thread) {
                    thread.unseenMessages = [];
                    return thread;
                })
            });
        case chatThread.THREAD_DISCONNECTED:
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId,
                threads: state.threads.update(action.threadId, function (thread) { return Object.assign({}, thread, { threadId: thread.threadId, active: false, unseenMessages: thread.unseenMessages }); })
            });
        case chatThread.THREAD_CREATED:
            return Object.assign({}, state, {
                selectedThreadId: action.thread.threadId,
                threads: state.threads.set(action.thread.threadId, action.thread),
            });
        case MESSAGE_ACTIVITY_RECEIVED:
            var conversationId = action.activity.conversation ? action.activity.conversation.id : '';
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId,
                threads: conversationId !== '' && conversationId !== state.selectedThreadId ?
                    state.threads.update(conversationId, function (thread) {
                        thread.unseenMessages = thread.unseenMessages.concat([action.activity]);
                        return thread;
                    }) : state.threads
            });
        default:
            return state;
    }
}
export var getSelectedThreadId = function (state) { return state.selectedThreadId; };
export var getSelectedThread = function (state) { return state.threads.get(state.selectedThreadId, {}); };
export var activeThreads = function (state) { return state.threads.filter(function (thread) { return thread.active; }); };
export var getThreadIds = function (state) { return state.threads.keys; };
export var getSelectedThreadUnseenMessages = function (state) { return getSelectedThread(state).unseenMessages; };
//# sourceMappingURL=chat-thread.reducers.js.map