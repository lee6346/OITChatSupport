import { Activity } from 'botframework-directlinejs';
import { DirectLineMessage } from '../models';
import * as chatBotSession from './chat-bot.actions';
import { List } from 'immutable';

export interface State {
    conversationId: string;
    subscriber: string;
    messages: List<DirectLineMessage>;
}

export const initialState: State = {
    conversationId: '',
    subscriber: '',
    messages: List<DirectLineMessage>()
};

export function reducer(state = initialState, action: chatBotSession.Actions): State {
    switch (action.type) {
        case chatBotSession.BOT_TOKEN_RETRIEVED:
            return Object.assign({}, state, {
                conversationId: action.conversationId,
                subscriber: state.subscriber,
                messages: state.messages
            });
        case chatBotSession.MESSAGE_ACTIVITY_RECEIVED:
            return Object.assign({}, state, {
                conversationId: state.conversationId,
                subscriber: state.subscriber,
                messages: state.messages.push(directLineMessageNormalizer(action.activity))
            });

        case chatBotSession.MESSAGE_ACTIVITY_SENT:
            return Object.assign({}, state, {
                conversationId: state.conversationId,
                subscriber: state.subscriber,
                messages: state.messages.push(directLineMessageNormalizer(action.activity))
            });
        case chatBotSession.CHANGE_CHAT_SUBSCRIBER:
            return Object.assign({}, state, {
                conversationId: state.conversationId,
                subscriber: action.id,
                messages: state.messages
            });
        case chatBotSession.CHAT_SESSION_ENDED:
            return Object.assign({}, state, {
                conversationId: '',
                subscriber: '',
                messages: List<DirectLineMessage>()
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