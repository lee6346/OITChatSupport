import { Message } from 'botframework-directlinejs';
import * as directLineActivity from '../actions/directline-activity.actions';
import { CHAT_SESSION_ENDED, ChatSessionEndedAction } from '../actions/directline-connection.actions';
import { List } from 'immutable';

export interface State{
    disconnectEvent: boolean;
    messages: List<Message>;
    studentRequestMessage: string | undefined;
}

export const initState: State = {
    disconnectEvent: false,
    messages: List<Message>(),
    studentRequestMessage: undefined

};

export function reducer(state = initState, action: directLineActivity.Actions | ChatSessionEndedAction): State {
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
                messages: state.messages.push(action.activity),
                studentRequestMessage: state.studentRequestMessage
            });
        case directLineActivity.MESSAGE_ACTIVITY_SENT:
            return Object.assign({}, state, {
                disconnectEvent: state.disconnectEvent,
                messages: state.messages.push(action.activity),
                studentRequestMessage: action.activity.text
            });
        case CHAT_SESSION_ENDED:
            return initState;
        default:
            return state;
    }
}

export const getMessages = (state: State) => state.messages;
export const getDisconnectEvent = (state: State) => state.disconnectEvent;
export const getLastStudentMessage = (state: State) => state.studentRequestMessage;
