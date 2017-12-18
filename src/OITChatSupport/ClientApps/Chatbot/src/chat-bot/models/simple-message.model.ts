export interface SimpleMessage {
    conversationId: string;
    text: string;
}

export function MockSimpleMessage(): SimpleMessage {
    return {
        conversationId: 'js9ds0122',
        text: 'testing simple message'
    };
}