import { Action } from '@ngrx/store';
import { CurrentConversationState } from '../state/current-conversation.state';
import * as currentConversationAction from '../action/current-conversation.action';

export const initialState: CurrentConversationState = {
    conversationId: ''
};

export function currentConversationReducer(
    state: CurrentConversationState = initialState,
    action: currentConversationAction.Actions): CurrentConversationState {
    switch (action.type) {
        case currentConversationAction.CHANGE_CONVERSATION:
            return Object.assign({}, state, {
                conversationId: action.conversationId
            });

        default:
            return state;
    }
}