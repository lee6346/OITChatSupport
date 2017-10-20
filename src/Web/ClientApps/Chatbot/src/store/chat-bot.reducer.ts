import { Activity } from 'botframework-directlinejs';
import { DirectLineMessage } from '../model';
import * as chatBotSession from './chat-bot.actions';
import { List } from 'immutable';

export interface State {
    conversationId: string;
    botHandler: string;
    agent?: string;
    messages: List<DirectLineMessage>;
}

export const initialState: State = {
    conversationId: '',
    botHandler: '',
    agent: undefined,
    messages: List<DirectLineMessage>()
};

export function reducer(state = initialState, action: chatBotSession.Actions): State {
    switch (action.type) {
        case chatBotSession.GET_BOT_TOKEN_COMPLETE:
            return Object.assign({}, state, {
                conversationId: action.conversationId,
                botHandler: state.botHandler,
                agent: state.agent,
                messages: state.messages
            });
        case chatBotSession.DIRECT_LINE_ACTIVITY_RECEIVED ||
            chatBotSession.POST_DIRECT_LINE_ACTIVITY_COMPLETE:
            return Object.assign({}, state, {
                conversationId: state.conversationId,
                botHandler: state.botHandler,
                agent: state.agent,
                messages: state.messages.push(directLineMessageNormalizer(action.activity))
            });
        case chatBotSession.CHANGE_CHAT_SUBSCRIBER:
            return Object.assign({}, state, {
                conversationId: state.conversationId,
                botHandler: state.botHandler,
                agent: action.id,
                messages: state.messages
            });
        case chatBotSession.DIRECT_LINE_DISCONNECT_COMPLETE:
            return Object.assign({}, state, {
                conversationId: '',
                botHandler: state.botHandler,
                agent: state.agent,
                messages: state.messages
            });
        default:
            return state;
    }
}

export function directLineMessageNormalizer(activity: Activity): DirectLineMessage {
    return {
        conversationId: activity.conversation ? activity.conversation.id : '',
        messageId: activity.id ? activity.id : '',
        senderId: activity.from.id,
        text: activity.type === 'message' ? activity.text : '',
        timestamp: activity.timestamp ? activity.timestamp : Date.now.toString(),
        object: []
    } as DirectLineMessage;
}

export const currentThread = (state: State) => state.conversationId;
export const currentMessages = (state: State) => state.messages;
export const filterBySender = (state: State, id: string) => state.messages.filter((message: DirectLineMessage) => message.conversationId === id);