import { GuidMock } from './guid-mock.model';

export interface AcceptRequest {
    conversationId: string;
    agentId: string;

}

export function createMockAcceptRequest(): AcceptRequest {
    return {
        conversationId: GuidMock.newMockGuid(),
        agentId: 'jvr632'
    };
}