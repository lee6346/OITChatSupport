import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AgentMessage } from '../model/agent-message.model';
import { RestfulGateway } from './restful.gateway';

@Injectable()
export class GroupChatGateway extends RestfulGateway {

    private groupMessagesUrl: string = 'api/ChatMessage/GetMessages';

    getMessages$(agentId: string): Observable<AgentMessage[]> {
        return this.http.get<AgentMessage[]>(
            this.baseUrl + this.groupMessagesUrl,
            this.queryString('id', agentId)
        );
    }
}