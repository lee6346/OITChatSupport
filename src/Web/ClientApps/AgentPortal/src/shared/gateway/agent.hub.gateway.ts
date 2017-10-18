import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HubConnection } from '@aspnet/signalr-client';
import { LiveRequest, Agent, AgentMessage } from '../model';

import {ReceiveMessageAction} from '../../store/action/group-chat.action';
import {ReceivedGroupJoinedAction, ReceivedGroupLeftAction } from '../../store/action/agents.action';
import {ReceiveRemoveRequestAction, ReceiveLiveRequestAction } from '../../store/action/live-request.action';

@Injectable()
export class AgentHubGateway{
    private _hubConnection: HubConnection;

    constructor(private store: Store<any>) {
        this.init();
    }
    send(message: any): any {
        this._hubConnection.invoke('Send', message);
        return message;
    }
    joinGroup(agent: Agent): void {
        this._hubConnection.invoke('JoinGroup', agent);
        console.log('successfully joined group');
    }
    leaveGroup(agent: Agent): void {
        this._hubConnection.invoke('LeaveGroup', agent);
    }
    acceptLiveRequest(liveRequest: LiveRequest): LiveRequest {
        this._hubConnection.invoke('RemoveTransferRequest', liveRequest);
        return liveRequest;
    }
    init() {
        this._hubConnection = new HubConnection('/agent');

        this._hubConnection.on('JoinGroup', (agent: Agent) => {
            this.store.dispatch(new ReceivedGroupJoinedAction(agent));
        });
        this._hubConnection.on('LeaveGroup', (agent: Agent) => {
            this.store.dispatch(new ReceivedGroupLeftAction(agent));
        });
        this._hubConnection.on('Send', (message: any) => {
            this.store.dispatch(new ReceiveMessageAction(message));
        });
        this._hubConnection.on('LiveTransfer', (liveRequest: LiveRequest) => {
            this.store.dispatch(new ReceiveLiveRequestAction(liveRequest));
        });
        this._hubConnection.on('RemoveTransferRequest', (liveRequest: LiveRequest) => {
            this.store.dispatch(new ReceiveRemoveRequestAction(liveRequest));
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