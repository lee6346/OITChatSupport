/**
 * Object stored in minimized chat session list to indicate
 * number of messages unseen and if user has disconnected
 */
export class HiddenChatSession{
    public conversationId: string;
    public messageCount: number;
    public disconnected: boolean;
}