import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HubConnection } from '@aspnet/signalr-client';

import { Store } from '@ngrx/store';
import * as AgentsActions from '../store/action/agents.action';
import { Agent, AgentMessage, LiveRequest } from '../model';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class HubConnectionService {

    private _hubConnection: HubConnection;
    private agentsUrl: string;
    private httpHeaders: HttpHeaders;

    constructor(
        private http: HttpClient,
        private store: Store<any>
    ) {
        this.init();
        this.agentsUrl = 'http://localhost:500/api/agent';
        this.httpHeaders = new HttpHeaders();
        this.httpHeaders = this.httpHeaders.set('Content-Type', 'application/json');
        this.httpHeaders = this.httpHeaders.set('Accept', 'application/json');
    }

    send(agentMessage: AgentMessage): AgentMessage {
        this._hubConnection.invoke('Send', agentMessage);
        return agentMessage;
    }

    joinGroup(agent: Agent): void {
        this._hubConnection.invoke('JoinGroup', agent);
    }

    leaveGroup(agent: Agent): void {
        this._hubConnection.invoke('LeaveGroup', agent);
    }

    acceptLiveRequest(liveRequest: LiveRequest): LiveRequest {
        this._hubConnection.invoke('RemoveRequest', liveRequest);
        return liveRequest;
    }

    private init() {
        this._hubConnection = new HubConnection('/agent');

        this._hubConnection.on('JoinGroup', (agent: Agent) => {
            this.store.dispatch(new AgentsActions.ReceivedGroupJoinedAction(agent));
        });

        this._hubConnection.on('LeaveGroup', (agent: Agent) => {
            this.store.dispatch(new AgentsActions.ReceivedGroupLeftAction(agent));
        });

        this._hubConnection.start()
            .then(() => {
                console.log('Hub connection started');
            })
            .catch(err => {
                console.log('Error while establishing connection');
            });

    }


}