import { Message } from 'botframework-directlinejs';

export interface LiveRequest {
    conversationId: string;
    user: string;
    botHandle: string;
}


export function MockLiveRequest(): LiveRequest {
    return {
        conversationId: '12345',
        user: 'student',
        botHandle: 'askrowdy'
    };
}