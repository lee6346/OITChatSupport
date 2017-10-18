import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx';
import { Conversation } from 'botframework-directlinejs';
import { LiveRequest } from '../model';
import { LiveRequestGateway } from '../gateway/live-request.gateway';
import { AgentHubGateway } from '../gateway/agent.hub.gateway';

@Injectable()
export class LiveRequestService{ 

    constructor(
        private liveRequestGateway: LiveRequestGateway,
        private agentHubGateway: AgentHubGateway
    ) { }

    getRequests$(group: string): Observable<LiveRequest[]> {
        console.log('Service: requesting gateway to retrieve requests');
        return this.liveRequestGateway
            .getLiveRequests$(group);
    }

    acceptRequest$(liveRequest: LiveRequest): Observable<Conversation> {
        return this.liveRequestGateway
            .acceptLiveRequest$(liveRequest);
    }


    



    

}