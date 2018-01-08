import * as directLine from '../actions/direct-line.actions';
import * as agentTransfer from '../actions/agent-transfer.actions';
import { ChatSessionState } from '../store/chat-session.state';


export const initState: ChatSessionState = {
    agentStatus: 'none',
    messages: [],
    threadId: undefined
};

export function reducer(state = initState, action: directLine.Actions | agentTransfer.Actions): ChatSessionState {
    switch (action.type) {
        case directLine.CONNECTION_TOKEN_RETRIEVED:
            return Object.assign({}, state, {
                agentStatus: state.agentStatus,
                messages: state.messages,
                threadId: action.conversationId
            });
        case directLine.DISCONNECT_ACTIVITY_RECEIVED:
            return Object.assign({}, state, {
                agentStatus: 'disconnected',
                messages: state.messages,
                threadId: state.threadId
            });
        case directLine.MESSAGE_ACTIVITY_RECEIVED:
            return Object.assign({}, state, {
                agentStatus: state.agentStatus,
                messages: [...state.messages, action.activity],
                threadId: state.threadId
            });
        case directLine.MESSAGE_ACTIVITY_SENT:
            return Object.assign({}, state, {
                agentStatus: state.agentStatus,
                messages: [...state.messages, action.activity],
                threadId: state.threadId
            });
        case agentTransfer.AGENT_TRANSFER_REQUESTED:
            return Object.assign({}, state, {
                agentStatus: 'waiting',
                messages: state.messages,
                threadId: state.threadId
            });
        case agentTransfer.AGENT_TRANSFER_CANCELED:
            return Object.assign({}, state, {
                agentStatus: 'none',
                messages: state.messages,
                threadId: state.threadId
            });
        default:
            return state;
    }
}

