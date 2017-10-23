import { Activity } from 'botframework-directlinejs';
import { DirectLineThread, DirectLineMessage } from '../models';
import * as directLineThread from '../actions/directline-thread.actions';
import { MESSAGE_ACTIVITY_RECEIVED, MessageActivityReceivedAction, MessageActivitySentAction, MESSAGE_ACTIVITY_SENT } from '../actions/directline-message.actions';


import { Map, List } from 'immutable';

export interface State {
    selectedThreadId: string | null;
    threads: Map<string, DirectLineThread>;
}

export const initialState: State = {
    selectedThreadId: null,
    threads: Map<string, DirectLineThread>(),
};

export function reducer(state = initialState, action: directLineThread.Actions | MessageActivityReceivedAction | MessageActivitySentAction ): State {
    switch (action.type) {

        case directLineThread.THREAD_REMOVED:
            console.log('direct line reducer: THREAD_REMOVED');
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId === action.threadId ? state.threads.first().conversationId : state.selectedThreadId,
                threads: state.threads.remove(action.threadId),
            });

        case directLineThread.SWITCH_THREAD:
            console.log('direct line reducer: SWITCHING_THREAD');
            return Object.assign({}, state, {
                selectedThreadId: action.threadId,
                threads: state.threads,
            });

        case directLineThread.THREAD_DISCONNECTED:
            console.log('direct line reducer: ACCEPT REQUEST COMPLETED');
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId,
                threads: state.threads.set(action.threadId, disconnectThread(state.threads.get(action.threadId))),
            });
        case directLineThread.THREAD_CREATED:
            return Object.assign({}, state, {
                selectedThreadId: action.thread.conversationId,
                threads: state.threads.set(action.thread.conversationId, action.thread),
            });
        case MESSAGE_ACTIVITY_SENT:
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId,
                threads: action.activity.conversation ? state.threads.update(action.activity.conversation.id,
                    (thread: DirectLineThread) => {
                        let id = normalizeSentMessageIds(action.activity);
                    thread.cachedMessageIds = id ?
                        [...thread.cachedMessageIds, id] : thread.cachedMessageIds; return thread
                    }) : state.threads
            });
        case MESSAGE_ACTIVITY_RECEIVED:
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId,
                threads: action.activity.conversation ? state.threads.update(action.activity.conversation.id,
                    (thread: DirectLineThread) => {
                        thread.cachedMessageIds = action.activity.id ?
                            [...thread.cachedMessageIds, action.activity.id] : thread.cachedMessageIds; return thread
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

export const disconnectThread = (thread: DirectLineThread) => Object.assign({}, thread, { active: false, ...thread });


export const getSelectedThreadId = (state: State) => state.selectedThreadId;
export const getSelectedThread = (state: State) => state.selectedThreadId ? state.threads.get(state.selectedThreadId) : {} as DirectLineThread;
export const activeThreads = (state: State) => state.threads.filter((thread: DirectLineThread) => thread.active);
export const getThreadIds = (state: State) => state.threads.keys;
export const getSelectedThreadMessageIds = (state: State) => state.selectedThreadId ? state.threads.get(state.selectedThreadId).messageIds : [];

