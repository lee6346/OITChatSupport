import { Activity } from 'botframework-directlinejs';
import { DirectLineThread, DirectLineMessage } from '../models';
import * as directLineSession from '../actions/directline-session.actions';
import { AcceptLiveRequestCompleteAction, ACCEPT_LIVE_REQUEST_COMPLETE } from '../actions/live-request.actions';
import { Map, List  } from 'immutable';


export interface State {
    selectedThreadId: string | null;
    threads: Map<string, DirectLineThread>;
    messages: List<DirectLineMessage>;
    cachedMessages: List<DirectLineMessage>;
}


export const initialState: State = {
    selectedThreadId: null,
    threads: Map<string, DirectLineThread>(),
    messages: List<DirectLineMessage>(),
    cachedMessages: List<DirectLineMessage>()
};

export function reducer(state = initialState, action: directLineSession.Actions | AcceptLiveRequestCompleteAction ): State {
    switch (action.type) {

        case directLineSession.REMOVE_SESSION_COMPLETE:
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId,
                threads: state.threads.delete(action.removeLoad.threadId),
                messages: state.messages.filter((message: DirectLineMessage) => 
                    message.conversationId !== action.removeLoad.threadId),
                cachedMessages: state.cachedMessages.filter((message: DirectLineMessage) => 
                    message.conversationId !== action.removeLoad.threadId),
            });

        case directLineSession.SEND_SESSION_ACTIVITY_COMPLETE:
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId,
                threads: state.threads,
                messages: state.messages.push(normalizeMessages(action.activity)),
                cachedMessages: state.cachedMessages
            });

        case directLineSession.RECEIVE_SESSION_ACTIVITY:
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId,
                threads: state.threads,
                messages: state.messages.push(normalizeMessages(action.activity)),
                cachedMessages: state.cachedMessages,
            });

        case directLineSession.SWITCH_SESSION:
            return Object.assign({}, state, {
                selectedThreadId: action.conversationId,
                threads: state.threads,
                messages: state.messages,
                cachedMessages: state.cachedMessages,
            });

        case directLineSession.GET_CACHED_ACTIVITY_COMPLETE:
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId,
                threads: state.threads,
                messages: state.messages,
                cachedMessages: state.cachedMessages.concat(action.activities.forEach(normalizeMessages)),
            });

        case ACCEPT_LIVE_REQUEST_COMPLETE:
            return Object.assign({}, state, {
                selectedThreadId: state.selectedThreadId,
                threads: state.threads.set(action.directLineThread
                    .conversationId, action.directLineThread),
                messages: state.messages,
                cachedMessages: state.cachedMessages,
            });

        default: 
            return state;   
    }
}

export const getAllMessages = (state: State) => state.messages;

export const getAllCachedMessages = (state: State) => state.cachedMessages;

export const getAllThreads = (state: State) => state.threads;


export const getSelectedId = (state: State) => state.selectedThreadId;

export const getSelectedThread = (state: State) => state.threads.find((thread: DirectLineThread) => 
    thread.conversationId === state.selectedThreadId);

export const getSelectedMessages = (state: State) => state.messages.filter((message: DirectLineMessage) => message.conversationId === state.selectedThreadId);
export const getSelectedCachedMessages = (state: State) => state.messages.filter((message: DirectLineMessage) => message.conversationId === state.selectedThreadId);

export const getThreadById = (state: State, id: string) => state.threads.find((thread: DirectLineThread) => thread.conversationId === id)

export const getMessageByThread = (state: State) => state.messages.groupBy((message: DirectLineMessage) => message.conversationId);
export const getCachedMessageByThread = (state: State) => state.cachedMessages.groupBy((message: DirectLineMessage) => message.conversationId);

export type SelectedPredicate = (id: string) => boolean;
export type CorrectInfoPredicate = (activity: Activity) => boolean;


export function normalizeMessages(activity: Activity): DirectLineMessage {

    return {
        conversationId: activity.conversation ? activity.conversation.id : '', 
        messageId: activity.id ? activity.id : '', senderId: activity.from.id, 
        text: activity.type === 'message' ? activity.text : '', 
        timestamp: activity.timestamp? activity.timestamp : Date.now.toString() 
        } as DirectLineMessage;
}
