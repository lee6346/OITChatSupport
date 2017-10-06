import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Subject } from 'rxjs/Rx';
import { LiveRequest } from '../model';
import { AgentHubGateway } from '../shared/gateway/agent.hub.gateway';
import { LiveRequestGateway } from './services/live-request.gateway';

@Injectable()
export class LiveRequestFacade {


    private liveRequestsUrl: string = 'api/LiveRequest/GetRequests';

    constructor(
        public store: Store<any>,
        private liveRequestGateway: LiveRequestGateway,
        private agentHub: AgentHubGateway
    ) {}


    private subscribeToHubEvents() {
        this.agentHub.getHubConnection().on()
    }
    
    getPendingRequests() {
        this.liveRequestGateway.get(this.liveRequestsUrl, '').
    }

    // this needs to be in the feature component, 
    onLiveRequestSelected(liveRequest: LiveRequest): void {

    }
    

    // should make http service call and dispatch current conversation
    acceptLiveRequest(liveRequest: LiveRequest): void {
        this.agentHub.acceptLiveRequest(liveRequest);
        this.store.dispatch()
    }


}