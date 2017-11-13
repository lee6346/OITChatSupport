export type LiveRequestStatus = 'pending' | 'none';

export interface LiveRequest {
    conversationId: string;
    user: string;
    botHandle: string;
    lastMessage: string | undefined;
}

export function MockLiveRequest(): LiveRequest {
    return {
        conversationId: '12345',
        user: 'student',
        botHandle: 'askrowdy',
        lastMessage: ''
    };
}