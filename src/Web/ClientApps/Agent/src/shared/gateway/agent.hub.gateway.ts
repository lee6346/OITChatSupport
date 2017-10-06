import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HubConnection } from '@aspnet/signalr-client';
import { HubGateway } from './hub.gateway';
import { Agent, AgentMessage, LiveRequest } from '../../model';

import { Observable, BehaviorSubject } from 'rxjs/Rx';

import * as Rx from 'rxjs/Rx';

@Injectable()
export class AgentHubGateway extends HubGateway{




    private liveRequestStream: BehaviorSubject<LiveRequest> = new BehaviorSubject<LiveRequest>(new LiveRequest());
    private agentStatusStream: BehaviorSubject<Agent> = new BehaviorSubject<Agent>(new Agent());
    private agentChatStream: BehaviorSubject<AgentMessage> = new BehaviorSubject<AgentMessage>(new AgentMessage());

    liveRequestObservable: Observable<LiveRequest>;
    agentStatusObservable: Observable<Agent>;
    agentChatObservable: Observable<AgentMessage>;

    constructor() {
        super();

        this.liveRequestObservable = this.liveRequestStream.asObservable().share();
        this.agentStatusObservable = this.agentStatusStream.asObservable().share();
        this.agentChatObservable = this.agentChatStream.asObservable().share();

        this.init();
    }

    getHubConnection(): HubConnection {
        return this._hubConnection;
    }

    send(message: any): any {
        this._hubConnection.invoke('Send', message);
        return message;
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

    test(): void {
        this._hubConnection.on('JoinGroup', (agent: Agent) => { return agent; });
    }

    init() {
        this._hubConnection = new HubConnection('/agent');

        this._hubConnection.on('JoinGroup', (agent: Agent) => {
            
        });

        this._hubConnection.on('LeaveGroup', (agent: Agent) => {
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