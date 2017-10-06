import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Subject } from 'rxjs/Rx';
import { LiveRequest } from '../model';
import { AgentHubGateway } from '../shared/gateway/agent.hub.gateway';


@Injectable()
export class LiveRequestFacade {

    constructor(
        public store: Store<any>,
        private agentHub: AgentHubGateway
    ) {}


    private subscribeToHubEvents() {
        this.agentHub.getHubConnection().on()
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