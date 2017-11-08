import { Message } from 'botframework-directlinejs';
import * as directLineActivity from '../actions/directline-activity.actions';
import { CHAT_SESSION_ENDED, ChatSessionEndedAction } from '../actions/directline-connection.actions';
import { List } from 'immutable';

export interface State{
    disconnectEvent: boolean;
    messages: List<Message>;
}

export const initState: State = {
    disconnectEvent: false,
    messages: List<Message>()
};

export function reducer(state = initState, action: directLineActivity.Actions | ChatSessionEndedAction): State {
    switch (action.type) {
        case directLineActivity.DISCONNECT_ACTIVITY_RECEIVED:
            return Object.assign({}, state, {
                disconnectEvent: true,
                messages: state.messages
            });
        case directLineActivity.MESSAGE_ACTIVITY_RECEIVED:
            return Object.assign({}, state, {
                disconnectEvent: state.disconnectEvent,
                messages: state.messages.push(action.activity)
            });
        case directLineActivity.MESSAGE_ACTIVITY_SENT:
            return Object.assign({}, state, {
                disconnectEvent: state.disconnectEvent,
                messages: state.messages.push(action.activity)
            });
        case CHAT_SESSION_ENDED:
            return initState;
        default:
            return state;
    }
}

export const getMessages = (state: State) => state.messages;
export const getDisconnectEvent = (state: State) => state.disconnectEvent;