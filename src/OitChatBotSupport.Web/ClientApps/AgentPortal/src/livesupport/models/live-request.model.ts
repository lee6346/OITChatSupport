import { Message} from 'botframework-directlinejs';


export interface LiveRequest {
    conversationId: string;
    botHandle: string;
    requested: string;
    lastMessage: string | undefined;

}

export function createMockLiveRequest(): LiveRequest {
    return {
        conversationId: '123456',
        botHandle: 'AskRowdy',
        requested: Date.now().toString(),
        lastMessage: ''
    };
}