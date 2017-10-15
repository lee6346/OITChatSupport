import { Action, ActionReducer } from "@ngrx/store";
import { Activity } from 'botframework-directlinejs';
import { DirectLineConnection, DirectLineThread } from "../../shared/model";
import * as directLineAction from '../action/direct-line.action';

export interface DirectLineSessionsState {
    currentSessionId: string;
    directLineSessions: DirectLineSessionState[];   
}
export const initialDirectLineSessionsState: DirectLineSessionsState = {
    currentSessionId: '',
    directLineSessions: []
};
export interface DirectLineSessionState {
    directLineThread: DirectLineThread;
    activityMessages: Activity[];
}
export const initialDirectLineSessionState: DirectLineSessionState = {
    directLineThread: {} as DirectLineThread,
    activityMessages: []
};
export function directLineSessionsReducer(state = initialDirectLineSessionsState, action: directLineAction.Actions): DirectLineSessionsState {
    switch (action.type) {
        case directLineAction.MESSAGE_ACTIVITY_RECEIVED || directLineAction.SEND_MESSAGE_ACTIVITY_COMPLETE:
            return Object.assign({}, state, () => {
                let thread = state.directLineSessions.find(
                    (session: DirectLineSessionState) =>
                        session.directLineThread.conversationId ===
                        action.activity.conversation!.id);
                thread!!.activityMessages.push(action.activity);
                return state;
            });
        case directLineAction.CHANGE_DIRECT_LINE_SESSION || directLineAction.GET_CONNECTION_THREAD_COMPLETE:
            return Object.assign({}, state, {
                currentSessionId: action.conversationId,
                directLineSessions: state.directLineSessions
            });
        default:
            return state;
    }
}

export const getCurrentSession = (conversationId: string, state: DirectLineSessionsState) =>
    state.directLineSessions.find((session: DirectLineSessionState) =>
        session.directLineThread.conversationId === conversationId);
export const getCurrentConversationId = (state: DirectLineSessionsState) => state.currentSessionId;
export const getDirectLineSessions = (state: DirectLineSessionsState) => state.directLineSessions;
export const getDirectLineThread = (state: DirectLineSessionState) => state.directLineThread;
export const getDirectLineMessages = (state: DirectLineSessionState) => state.activityMessages;
