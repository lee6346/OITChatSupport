import * as agentTransfer from '../actions/agent-transfer.actions';
import * as directLineConnection from '../actions/directline-connection.actions';

export interface State {
    connected: boolean;
    requestPending: boolean;
    threadId: string;
}

export const initState: State = {
    connected: false,
    requestPending: false,
    threadId: ''
};

export function reducer(state = initState, action: agentTransfer.Actions | directLineConnection.Actions): State {
    switch (action.type) {
        case agentTransfer.AGENT_TRANSFER_REQUESTED:
            return Object.assign({}, state, {
                connected: state.connected,
                requestPending: true,
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

export const getThreadId = (state: State) => state.threadId;