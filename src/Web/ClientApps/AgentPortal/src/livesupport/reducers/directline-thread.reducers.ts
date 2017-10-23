import { Activity } from 'botframework-directlinejs';
import { DirectLineThread, DirectLineMessage } from '../models';
import { DirectLineThreadVm } from '../viewmodels';
import * as directLineThread from '../actions/directline-thread.actions';
import { MESSAGE_ACTIVITY_RECEIVED, MessageActivityReceivedAction, MessageActivitySentAction, MESSAGE_ACTIVITY_SENT } from '../actions/directline-message.actions';
import { Map, List } from 'immutable';

export interface State {
    selectedThreadId: string | '';
    threads: Map<string, DirectLineThread>;
}

export interface UiState {
    selectedThreadId: string | '';
    threadsUi: Map<string, DirectLineThreadVm>, 
}

export const initialState: State = {
    selectedThreadId: '',
    threads: Map<string, DirectLineThread>(),
};

export const initialUiState: UiState = {
    selectedThreadId: '',
    threadsUi: Map<string, DirectLineThreadVm>()
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



export function uiReducer(state = initialUiState, action: directLineThread.Actions | MessageActivityReceivedAction ): UiState {
    switch (action.type) {
        case directLineThread.THREAD_REMOVED:
            console.log('direct line reducer: THREAD_REMOVED');
            return Object.assign({}, state, {
                selectedThreadId: action.threadId === state.selectedThreadId ? state.threadsUi.first().threadId : state.selectedThreadId,
                threadsUi: state.threadsUi.remove(action.threadId)
            });
        case directLineThread.SWITCH_THREAD:
            console.log('direct line reducer: SWITCHING_THREAD');

            return Object.assign({}, state, {
                selectedThreadId: action.threadId,
                threadsUi: state.threadsUi.update(action.threadId, (val: DirectLineThreadVm) => { val.unseenMessageCount = 0; return val;})
            });
        case directLineThread.THREAD_DISCONNECTED:
            console.log('direct line reducer: ACCEPT REQUEST COMPLETED');
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId,
                threadsUi: state.threadsUi.update(action.threadId, (val: DirectLineThreadVm) => { val.active = false; return val;})
            });
        case directLineThread.THREAD_CREATED:
            return Object.assign({}, state, {
                selectedThreadId: action.thread.conversationId,
                threadsUi: state.threadsUi.set(action.thread.conversationId, {threadId: action.thread.conversationId, active: true, unseenMessageCount: 0} as DirectLineThreadVm),
            });

        case MESSAGE_ACTIVITY_RECEIVED:
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId,
                threadsUi: typeof action.activity.conversation !== 'undefined' && action.activity.conversation.id !== state.selectedThreadId ?
                    state.threadsUi.update(action.activity.conversation.id, (val: DirectLineThreadVm) => { return Object.assign({}, val, {threadId: val.threadId, active: val.active, unseenMessageCount: val.unseenMessageCount + 1}); }) :
                    state.threadsUi
            });
        default:
            return state;
    }
}

export const getUiThreads = (state: UiState) => state.threadsUi; 