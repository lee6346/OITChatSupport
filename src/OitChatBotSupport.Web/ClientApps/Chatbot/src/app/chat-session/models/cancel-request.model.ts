/**
 * Cancel Request form with conversation Id. See {@link AgentTransferService}
 *
 */
export interface CancelRequest {
    conversationId: string;
}

/**
 * Generate mock CancelRequest objects for testing
 */
export function MockCancelRequest(): CancelRequest {
    return {
        conversationId: '12345-3dls'
    };
}