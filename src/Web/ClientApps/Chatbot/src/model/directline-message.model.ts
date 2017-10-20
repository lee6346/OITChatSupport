export interface DirectLineMessage {
    conversationId: string;
    senderId: string;
    messageId: string;
    timestamp: string;
    text: string;
    object: any[];
} 

export interface SimpleMessage {
    conversationId: string;
    text: string;
}
