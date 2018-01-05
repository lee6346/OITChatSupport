import * as agentTransfer from '../actions/agent-transfer.actions';
import * as directLineConnection from '../actions/directline-connection.actions';
export var initState = {
    connected: false,
    requestPending: false,
    threadId: ''
};
export function reducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case agentTransfer.AGENT_TRANSFER_REQUESTED:
            return Object.assign({}, state, {
                connected: state.connected,
                requestPending: true,
                threadId: state.threadId
            });
        case agentTransfer.AGENT_TRANSFER_CANCELED:
            return Object.assign({}, state, {
                connected: state.connected,
                requestPending: false,
                threadId: state.threadId
            });
        case directLineConnection.CONNECTION_TOKEN_RETRIEVED:
            return Object.assign({}, state, {
                connected: true,
                requestPending: state.requestPending,
                threadId: action.conversationId
            });
        case directLineConnection.END_CHAT_CONNECTION:
            return Object.assign({}, state, initState);
        default:
            return state;
    }
}
export var getThreadId = function (state) { return state.threadId; };
//# sourceMappingURL=chat-status.reducers.js.map