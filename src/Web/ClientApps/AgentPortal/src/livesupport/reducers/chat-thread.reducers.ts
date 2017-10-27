import { Activity } from 'botframework-directlinejs';
import { ChatThread } from '../models';
import * as chatThread from '../actions/chat-thread.actions';
import { MESSAGE_ACTIVITY_RECEIVED, MessageActivityReceivedAction } from '../actions/chat-message.actions';
import { Map } from 'immutable';

export interface State {
    selectedThreadId: string | '';
    threads: Map<string, ChatThread>;
}

export const initialState: State = {
    selectedThreadId: '',
    threads: Map<string, ChatThread>(),
};

export function reducer(state = initialState, action: chatThread.Actions | MessageActivityReceivedAction): State {
    switch (action.type) {
        case chatThread.THREAD_REMOVED:
            return Object.assign({}, state, {
                selectedThreadId: action.threadId === state.selectedThreadId ? state.threads.first().threadId : state.selectedThreadId,
                threads: state.threads.remove(action.threadId)
            });
        case chatThread.SWITCH_THREAD:
            return Object.assign({}, state, {
                selectedThreadId: action.threadId,
                threads: state.threads.update(action.threadId, (thread: ChatThread) =>
                { return Object.assign({}, thread, { threadId: thread.threadId, active: thread.active, unseenMessages: [] }); })
            });
        case chatThread.THREAD_DISCONNECTED:
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId,
                threads: state.threads.update(action.threadId, (thread: ChatThread) =>
                { return Object.assign({}, thread, { threadId: thread.threadId, active: false, unseenMessages: thread.unseenMessages }); })
            });
        case chatThread.THREAD_CREATED:
            return Object.assign({}, state, {
                selectedThreadId: action.thread.threadId,
                threads: state.threads.set(action.thread.threadId, { threadId: action.thread.threadId, active: true, unseenMessages: [] } as ChatThread),
            });
        case MESSAGE_ACTIVITY_RECEIVED:
            let conversationId: string = action.activity.conversation ? action.activity.conversation.id : '';
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId,
                threads: conversationId !== '' && conversationId !== state.selectedThreadId ?
                    state.threads.update(conversationId, (thread: ChatThread) => {
                        return Object.assign({}, thread, {
                            threadId: thread.threadId, active: thread.active, unseenMessages: action.activity.type === 'message' ?
                                [...thread.unseenMessages, action.activity.text] : state.threads
                        });
                    }) : state.threads
            });
        default:
            return state;
    }
}


export function normalizeSentMessageIds(activity: Activity): string | undefined {
    if (activity.id && activity.conversation) {
        activity.id = activity.conversation.id + '|' + activity.id;

    }
    return activity.id;
}


export const getSelectedThreadId = (state: State) => state.selectedThreadId;
export const getSelectedThread = (state: State) => state.threads.get(state.selectedThreadId, {} as ChatThread);
export const activeThreads = (state: State) => state.threads.filter((thread: ChatThread) => thread.active);
export const getThreadIds = (state: State) => state.threads.keys;
export const getSelectedThreadUnseenMessages = (state: State) => getSelectedThread(state).unseenMessages;
