import * as directLineActivity from '../actions/directline-activity.actions';
import { END_CHAT_CONNECTION } from '../actions/directline-connection.actions';
export var initState = {
    disconnectEvent: false,
    messages: [],
    studentRequestMessage: undefined
};
export function reducer(state, action) {
    if (state === void 0) { state = initState; }
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
                messages: state.messages.concat([action.activity]),
                studentRequestMessage: state.studentRequestMessage
            });
        case directLineActivity.MESSAGE_ACTIVITY_SENT:
            return Object.assign({}, state, {
                disconnectEvent: state.disconnectEvent,
                messages: state.messages.concat([action.activity]),
                studentRequestMessage: action.activity.text
            });
        case END_CHAT_CONNECTION:
            return Object.assign({}, state, initState);
        default:
            return state;
    }
}
export var getMessages = function (state) { return state.messages; };
export var getDisconnectEvent = function (state) { return state.disconnectEvent; };
export var getLastStudentMessage = function (state) { return state.studentRequestMessage; };
//# sourceMappingURL=chat-message.reducers.js.map