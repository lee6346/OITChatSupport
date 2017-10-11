import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AgentMessage } from '../model';
import { RestfulGateway } from './restful.gateway';

@Injectable()
export class GroupChatGateway extends RestfulGateway {

    private groupMessagesUrl: string = 'api/ChatMessage/GetMessages/';

    constructor(http: HttpClient) {
        super(http);
    }

    getMessages$(agentId: string): Observable<AgentMessage[]> {
        return this.http.get<AgentMessage[]>(
            this.baseUrl + this.groupMessagesUrl + agentId
        );
    }
}