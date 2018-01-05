import { GuidMock } from './guid-mock.model';

export interface RemoveRequest {
    conversationId: string;
}

export function createMockRemoveRequest(): RemoveRequest {
    return {
        conversationId: GuidMock.newMockGuid()
    };
}