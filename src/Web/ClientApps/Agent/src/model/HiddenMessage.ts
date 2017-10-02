/**
 * Sent to the minimized window container to emit UI event when new messages have been received in
 * a minimized chat session
 */
export class HiddenMessage {
    public conversationId: string;
    public disconnect: boolean;
}