import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx';

import { LiveRequest } from '../model';
import { LiveRequestGateway } from '../gateway/live-request.gateway';
import { AgentHubGateway } from '../gateway/agent.hub.gateway';

@Injectable()
export class LiveRequestService{ 

    constructor(
        private liveRequestGateway: LiveRequestGateway,
        private agentHubGateway: AgentHubGateway
    ) { }

    getRequests$(agentId: string): Observable<LiveRequest[]> {
        return this.liveRequestGateway
            .getLiveRequests$(agentId);
    }

    acceptRequest(liveRequest: LiveRequest) {
        this.agentHubGateway.acceptLiveRequest(liveRequest);
    }


    



    

}