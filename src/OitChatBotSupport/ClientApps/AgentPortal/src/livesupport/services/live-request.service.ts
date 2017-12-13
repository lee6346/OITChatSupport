import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Conversation } from 'botframework-directlinejs';
import { LiveRequest } from '../models';
import { AgentHubGateway } from '../../core/agent.hub.gateway';
import { environment } from '../../../environments/environment';

@Injectable()
export class LiveRequestService {

    constructor(
        private http: HttpClient,
        private agentHubGateway: AgentHubGateway
    ) { }

    getLiveRequests$(group: string): Observable<LiveRequest[]> {
        return this.http.get<LiveRequest[]>(
            environment.baseWebUrl +
            environment.liveRequests +
            '/' + group
        );
    }

    acceptLiveRequest$(liveRequest: LiveRequest): Observable<Conversation> {
        console.log('accepting live request....');
        return this.http.post<Conversation>(
            environment.baseWebUrl +
            environment.acceptRequest,
            liveRequest
        );
    }
}