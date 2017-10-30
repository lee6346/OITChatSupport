export interface LiveRequest {
    conversationId: string;
    user: string;
    botHandle: string;
    timeRequested: string;

}

export function createMockLiveRequest(): LiveRequest {
    return {
        conversationId: '123456',
        user: 'student',
        botHandle: 'AskRowdy',
        timeRequested: Date.now().toString()
    };
}