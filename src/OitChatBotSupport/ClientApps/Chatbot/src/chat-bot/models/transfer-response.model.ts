/**
 * The http response data from making a request for agent transfer services. See {@link AgentTransferService}
 *
 * contains information about agent availability and how busy they are
 */
export interface TransferResponse {
    agentsAvailable: boolean;
    studentsAhead: number;
}

/**
 * Generate mock TransferResponse objects for testing
 */
export function MakeTransferResponse(): TransferResponse {
    return {
        agentsAvailable: false,
        studentsAhead: 2
    };
}