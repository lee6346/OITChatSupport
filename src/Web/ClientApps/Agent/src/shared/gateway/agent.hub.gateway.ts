import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { HubConnection } from '@aspnet/signalr-client';
import { Agent } from '../model/agent.model';
import { AgentMessage } from '../model/agent-message.model';
import { LiveRequest } from '../model/live-request.model';


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

    joinGroup(group: string): void {
        this._hubConnection.invoke('JoinGroup', group);
    }

    leaveGroup(group: string): void {
        this._hubConnection.invoke('LeaveGroup', group);
    }

    acceptLiveRequest(liveRequest: LiveRequest): LiveRequest {
        this._hubConnection.invoke('RemoveRequest', liveRequest);
        return liveRequest;
    }


    init() {
        this._hubConnection = new HubConnection('/agent');

        this._hubConnection.on('JoinGroup', (agent: Agent) => {
            this.store.dispatch()
        });

        this._hubConnection.on('LeaveGroup', (agent: Agent) => {
            this.store.dispatch()
        });

        this._hubConnection.on('Send', (message: any) => {
            this.store.dispatch()
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