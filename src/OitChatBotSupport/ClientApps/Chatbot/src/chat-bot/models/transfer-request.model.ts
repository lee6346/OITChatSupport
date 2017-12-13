/**
 * The data sent to agents when making a transfer request. See {@link AgentTransferService}
 *
 * contains contextual data for agent to know where the bot failed
 */
export interface TransferRequest {
    conversationId: string;
    botHandle: string;
    lastMessage: string | undefined;
}

/**
 * Generate mock TransferRequest objects for testing
 */
export function MockTransferRequest(): TransferRequest {
    return {
        conversationId: '12345-3dls',
        botHandle: 'askrowdy',
        lastMessage: 'testing'
    };
}