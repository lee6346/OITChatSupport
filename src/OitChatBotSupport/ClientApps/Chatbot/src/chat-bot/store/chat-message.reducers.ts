﻿import { Message } from 'botframework-directlinejs';

import * as directLineActivity from '../actions/directline-activity.actions';
import { END_CHAT_CONNECTION, EndChatConnectionAction } from '../actions/directline-connection.actions';


/**
 * The State of the chat messages and its contextual information
 */
export interface State{
    disconnectEvent: boolean;
    messages: Message[];
    studentRequestMessage: string | undefined;
}

export const initState: State = {
    disconnectEvent: false,
    messages: [],
    studentRequestMessage: undefined
};

/**
 * The reducer receives specified actions to change state
 *
 * @param {initState} state Used to initialze the state when the application loads
 * @param {Action} action Only listens for the specified action types 
 */
export function reducer(state = initState, action: directLineActivity.Actions | EndChatConnectionAction): State {
    switch (action.type) {
        case directLineActivity.DISCONNECT_ACTIVITY_RECEIVED:
            return Object.assign({}, state, {
                disconnectEvent: true,
                messages: state.messages,
                studentRequestMessage: state.studentRequestMessage
            });
        case directLineActivity.MESSAGE_ACTIVITY_RECEIVED:
            return Object.assign({}, state, {
                disconnectEvent: state.disconnectEvent,
                messages: [...state.messages, action.activity],
                studentRequestMessage: state.studentRequestMessage
            });
        case directLineActivity.MESSAGE_ACTIVITY_SENT:
            return Object.assign({}, state, {
                disconnectEvent: state.disconnectEvent,
                messages: [...state.messages, action.activity],
                studentRequestMessage: action.activity.text
            });
        case END_CHAT_CONNECTION:
            return Object.assign({}, state, initState);
        default:
            return state;
    }
}

export const getMessages = (state: State) => state.messages;
export const getDisconnectEvent = (state: State) => state.disconnectEvent;
export const getLastStudentMessage = (state: State) => state.studentRequestMessage;