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
        private agentHubGateway: AgentHubGateway,
        private store: Store<any>
    ) { }

    getRequests(): void {
        this.liveRequestGateway.getLiveRequests$().subscribe(
            (liveRequests: LiveRequest[]) => this.store.dispatch(),
            err => console.log('error'),
            () => console.log('complete')
        );

    }

    acceptRequest(liveRequest: LiveRequest) {
        this.agentHubGateway.send(liveRequest);
    }


    



    

}