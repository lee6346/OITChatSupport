import { Action } from '@ngrx/store';
import { GroupChatState } from '../state/group-chat.state';
import * as groupChatAction from '../action/group-chat.action';

import { AgentMessage } from '../../model';

export const initialState: GroupChatState = {
    agentMessages: []
};

export function groupChatReducer(state: GroupChatState = initialState, action: groupChatAction.Actions): GroupChatState {

    switch (action.type) {
        case groupChatAction.RECEIVE_MESSAGE:
            return Object.assign({}, state, {
                agentMessages: state.agentMessages.push(action.agentMessage)
            });
        case groupChatAction.FILTER_BY_AGENT:
            return Object.assign({}, state, {
                agentMessages: state.agentMessages.filter(message => message.agentId === action.agentId)
            });
        default:
            return state;
    }
}
