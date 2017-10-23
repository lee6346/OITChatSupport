import { Activity } from 'botframework-directlinejs';
import { DirectLineMessage } from '../models';
import * as directLineMessage from '../actions/directline-message.actions';
import { THREAD_REMOVED, ThreadRemovedAction } from '../actions/directline-thread.actions';
import { Map, List } from 'immutable';

export interface State {
    messages: Map<string, DirectLineMessage>;
    cachedMessages: Activity[];
}

export const initialState: State = {
    messages: Map<string, DirectLineMessage>(),
    cachedMessages: []
};

export function reducer(state = initialState, action: directLineMessage.Actions | ThreadRemovedAction ): State {
    switch (action.type) {

        case directLineMessage.CACHED_MESSAGES_LOADED:
            return Object.assign({}, state, {
                messages: state.messages,
                cachedMessages: state.cachedMessages.concat(action.cachedLoad.cachedMessageSet)//.set(action.cachedLoad.threadId, action.cachedLoad.cachedMessageSet),
            });

        case directLineMessage.MESSAGE_ACTIVITY_RECEIVED:
            let messageReceived = normalizeMessages(action.activity);
            return Object.assign({}, state, {
                messages: state.messages.set(messageReceived.messageId, messageReceived),
                cachedMessages: state.cachedMessages
            });

        case directLineMessage.MESSAGE_ACTIVITY_SENT:
            console.log('direct line reducer: RECEIVED_SESSION_ACTIVITY');
            let messageSent = normalizeMessages(action.activity);
            return Object.assign({}, state, {
                messages: state.messages.set(messageSent.messageId, messageSent),
                cachedMessages: state.cachedMessages,
            });

        case THREAD_REMOVED:
            return Object.assign({}, state, {
                messages: state.messages.filter((message: DirectLineMessage) => message.conversationId !== action.threadId),
                cachedMessages: state.cachedMessages.filter((activity: Activity) => typeof activity.conversation !== 'undefined' && activity.conversation.id !== action.threadId)//.remove(action.threadId)
            });

        default:
            return state;
    }
}
export function normalizeMessages(activity: Activity): DirectLineMessage {
    return {
        conversationId: activity.conversation ? activity.conversation.id : '',
        messageId: activity.id ? activity.id : '', senderId: activity.from.id,
        text: activity.type === 'message' ? activity.text : '',
        timestamp: activity.timestamp ? activity.timestamp : Date.now.toString()
    } as DirectLineMessage;
}

export function normalizeMessageSet(activities: Activity[]): DirectLineMessage[] {
    let normalizedSet: DirectLineMessage[] = [];
    for (let item of activities) {
        normalizedSet.push(normalizeMessages(item));
    }
    return normalizedSet;
}
//return state attributes
export const getThreadMessageIds = (state: State, threadId: string) => state.messages.filter((message: DirectLineMessage) => message.conversationId === threadId).keys;

