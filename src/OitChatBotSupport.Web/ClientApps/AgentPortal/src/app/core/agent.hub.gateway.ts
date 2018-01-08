import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HubConnection } from '@aspnet/signalr-client';
import { Agent } from '../oit-agents/models';
import { LiveRequest, RemoveRequest } from '../livesupport/models';

import { AgentMemberJoinedAction, AgentMemberLeftAction } from '../oit-agents/actions/agent-group.actions';
import { LiveRequestReceivedAction, LiveRequestRemovedAction } from '../livesupport/actions/live-request.actions';


@Injectable()
export class AgentHubGateway{

    private _hubConnection: HubConnection;

    constructor(private store: Store<any>) {
        this.init();
    }

    joinGroup(agent: Agent): void {
        this._hubConnection.invoke('JoinGroup', agent);
    }

    leaveGroup(agent: Agent): void {
        this._hubConnection.invoke('LeaveGroup', agent);
    }

    init() {
        this._hubConnection = new HubConnection('/agent');

        this._hubConnection.on('JoinGroup', (agent: Agent) => {
            console.log('joining group');
            this.store.dispatch(new AgentMemberJoinedAction(agent));
        });

        this._hubConnection.on('LeaveGroup', (agent: Agent) => {
            console.log('leaving group');
            this.store.dispatch(new AgentMemberLeftAction(agent));
        });

        this._hubConnection.on('LiveTransfer', (liveRequest: LiveRequest) => {
            console.log('live transfer requested');
            this.store.dispatch(new LiveRequestReceivedAction(liveRequest));
        });

        this._hubConnection.on('RemoveTransferRequest', (removeRequest: RemoveRequest) => {
            console.log('remove request');
            this.store.dispatch(new LiveRequestRemovedAction(removeRequest));
        });

        this._hubConnection.start()
            .then(() => {
                let x = {} as Agent;
                x.agentId = 'jvr632';
                this.joinGroup(x);
                console.log('Hub connection started');
            })
            .catch(err => {
                console.log('Error while establishing connection');
            });
    }
}