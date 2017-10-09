import { Action } from '@ngrx/store';
import { GroupChatState } from '../state/group-chat.state';
import * as groupChatAction from '../action/group-chat.action';

import { AgentMessage } from '../../shared/model/agent-message.model';


export const initialState: GroupChatState = {
    agentMessages: []
};

export function groupChatReducer(state: GroupChatState = initialState, action: groupChatAction.Actions): GroupChatState {

    switch (action.type) {
        case groupChatAction.RECEIVE_MESSAGE:
            return Object.assign({}, state, {
                agentMessages: [...state.agentMessages, action.agentMessage],
            });
        default:
            return state;
    }
}
export const getGroupMessages = (groupChatState: GroupChatState) => groupChatState.agentMessages;