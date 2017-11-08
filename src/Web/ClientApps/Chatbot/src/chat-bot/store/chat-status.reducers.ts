
import { LiveRequestStatus } from '../models';
import * as liveRequest from '../actions/live-request.actions';
import * as directLineConnection from '../actions/directline-connection.actions';

export interface State {
    connected: boolean;
    requestStatus: LiveRequestStatus;
    threadId: string;
}

export const initState: State = {
    connected: false,
    requestStatus: 'none',
    threadId: ''
};

export function reducer(state = initState, action: liveRequest.Actions | directLineConnection.Actions): State {
    switch (action.type) {
        case liveRequest.LIVE_SUPPORT_REQUESTED:
            return Object.assign({}, state, {
                connected: state.connected,
                requestStatus: 'pending',
                threadId: state.threadId
            });
        case liveRequest.LIVE_SUPPORT_CANCELED:
            return Object.assign({}, state, {
                connected: state.connected,
                requestStatus: 'none',
                threadId: state.threadId
            });
        case directLineConnection.BOT_TOKEN_RETRIEVED:
            return Object.assign({}, state, {
                connected: true,
                requestStatus: state.requestStatus,
                threadId: action.conversationId
            });
        case directLineConnection.CHAT_SESSION_ENDED:
            return initState;
        default:
            return state;
    }
}
export const getThreadId = (state: State) => state.threadId;
export const getRequestStatus = (state: State) => state.requestStatus;