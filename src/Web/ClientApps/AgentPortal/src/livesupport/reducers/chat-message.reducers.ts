import { Activity } from 'botframework-directlinejs';
import * as directLineMessage from '../actions/chat-message.actions';
import { THREAD_REMOVED, ThreadRemovedAction } from '../actions/chat-thread.actions';
import { Map } from 'immutable';

export interface State {
    messages: Map<string, Activity[]>;
}
export const initialState: State = {
    messages: Map<string, Activity[]>()
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

