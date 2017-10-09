/**
 * Used for tracking live requests and broadcasting to accept live requests
 */
export class LiveRequestVm {
    public conversationId: string;
    public user: string;
    public botHandle: string;
    public timeRequested?: string;

    constructor() { }
}