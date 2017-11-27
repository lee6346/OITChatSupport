export interface TransferRequest {
    conversationId: string;
    user: string;
    botHandle: string;
    lastMessage: string | undefined;
}

export function MockTransferRequest(): TransferRequest {
    return {
        conversationId: '12345-3dls',
        user: 'student',
        botHandle: 'askrowdy',
        lastMessage: 'testing'
    };
}