/**
 * Used for tracking live requests and broadcasting to accept live requests
 */
export class LiveRequest {
    public conversationId: string;
    public user: string;
    public botHandle: string;
    public timeRequested?: string;

    constructor() { }

    sameAs(liveRequest: LiveRequest) {
        return this.conversationId === liveRequest.conversationId;
    }
}