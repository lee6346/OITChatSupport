import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AgentMessage } from '../model';
import { GroupChatGateway } from '../gateway/group-chat.gateway';
import { AgentHubGateway } from '../gateway/agent.hub.gateway';

@Injectable()
export class GroupChatService {

    constructor(
        private agentHubGateway: AgentHubGateway,
        private groupChatGateway: GroupChatGateway
    ) { }

    getCurrentMessages$(agentId: string): Observable<AgentMessage[]> {
        return this.groupChatGateway.getMessages$(agentId);
    }

    sendGroupMessage(agentMessage: AgentMessage): void {
        this.agentHubGateway.send(agentMessage);
    }
}