import { Injectable } from '@angular/core'
import { LiveRequestGateway } from '../gateway/live-request.gateway';
import { AgentHubGateway } from '../gateway/agent.hub.gateway';
import { DirectLine, Conversation, Activity, ConnectionStatus } from 'botframework-directlinejs';
import { Observable } from 'rxjs/Rx';
import { Store, Action } from '@ngrx/store';
import { LiveRequest } from '../model/live-request.model';
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