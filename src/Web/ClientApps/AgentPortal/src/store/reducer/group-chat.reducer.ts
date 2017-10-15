import { Action } from '@ngrx/store';
import * as groupChatAction from '../action/group-chat.action';
import { AgentMessage } from '../../shared/model';

export interface GroupChatState {
    groupMessages: AgentMessage[];
}

export const initialGroupChatState: GroupChatState = {
    groupMessages: []
};
export function groupChatReducer(state: GroupChatState = initialGroupChatState, action: groupChatAction.Actions): GroupChatState {
    switch (action.type) {
        case groupChatAction.RECEIVE_MESSAGE:
            return Object.assign({}, state, {
                groupMessages: [...state.groupMessages, action.agentMessage],
            });
        default:
            return state;
    }
}
export const getGroupMessages = (groupChatState: GroupChatState) => groupChatState.groupMessages;