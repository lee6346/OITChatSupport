import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HubConnection } from '@aspnet/signalr-client';
import { AgentMessage, Agent } from '../agent-group/models';
import { LiveRequest, RemoveRequest } from '../livesupport/models';

import {
    ReceivedJoinedAgentAction,
    ReceivedLeftAgentAction,
    ReceiveGroupMessageAction
} from '../agent-group/actions/agent-group.actions';

import {
    LiveRequestReceivedAction,
    LiveRequestRemovedAction
} from '../livesupport/actions/live-request.actions';

@Injectable()
export class AgentHubGateway{

    private _hubConnection: HubConnection;

    constructor(private store: Store<any>) {
        this.init();
    }

    send(message: AgentMessage): void {
        this._hubConnection.invoke('Send', message);
    }

    joinGroup(agent: Agent): void {
        this._hubConnection.invoke('JoinGroup', agent);
        console.log('successfully joined group');
    }

    leaveGroup(agent: Agent): void {
        this._hubConnection.invoke('LeaveGroup', agent);
    }

    init() {
        this._hubConnection = new HubConnection('/agent');

        this._hubConnection.on('JoinGroup', (agent: Agent) => {
            console.log('joining group');
            this.store.dispatch(new ReceivedJoinedAgentAction(agent));
        });
        this._hubConnection.on('LeaveGroup', (agent: Agent) => {
            console.log('leaving group');
            this.store.dispatch(new ReceivedLeftAgentAction(agent));
        });
        this._hubConnection.on('Send', (message: any) => {
            console.log('Send message invoked');
            this.store.dispatch(new ReceiveGroupMessageAction(message));
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
                x.botHandle = 'AskRowdy';
                x.connected = true;
                this.joinGroup(x);
                console.log('Hub connection started');
            })
            .catch(err => {
                console.log('Error while establishing connection');
            });
    }
}