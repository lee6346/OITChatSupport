import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Conversation } from 'botframework-directlinejs';
import { LiveRequest } from '../livesupport/models';
import { AgentHubGateway } from './agent.hub.gateway';
import { environment } from '../../environments/environment';

@Injectable()
export class LiveRequestService{ 

    constructor(
        private http: HttpClient,
        private agentHubGateway: AgentHubGateway
    ) { }

    getLiveRequests$(group: string): Observable<LiveRequest[]>{
        console.log('Gateway: making http call to retrieve requests');
        return this.http.get<LiveRequest[]>(
            environment.baseWebUrl +
            environment.liveRequests +
            '/' + group
        );
    }

    acceptLiveRequest$(liveRequest: LiveRequest): Observable<Conversation> {
        console.log('ACCEPTING A LIVE REQUEST');
        return this.http.post<any>(
            environment.baseWebUrl +
            environment.acceptRequest,
            liveRequest
        );
    } 
}