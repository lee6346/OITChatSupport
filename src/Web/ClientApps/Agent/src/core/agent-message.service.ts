import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HubConnection } from '@aspnet/signalr-client';
import { Observable, Subject } from 'rxjs/Rx';


import { AgentMessage, ErrorMessage, Agent } from '../model';
/**
 * Services real time agent-group messaging via signal r 
 */
@Injectable()
export class AgentMessageService {

    private _hubConnection: HubConnection;
    private connectedAgentsUrl: string = 'http://localhost:5000/api/agent/getconnected/';
    private groupMessagesUrl: string = 'http://localhost:5000/api/getgroupmessages/';


    private agentMessageStream: Subject<AgentMessage> = new Subject<AgentMessage>();
    public agentMessage$: Observable<AgentMessage> = this.agentMessageStream.asObservable();

    constructor(
        private http: Http
    ) {
        this.init();
    }

    public sendGroupMessage(agentMessage: AgentMessage) {
        this._hubConnection.invoke('Send', agentMessage);
        this.agentMessageStream.next(agentMessage);
    }

    public joinGroup(agentId: string) {
        let joinedMessage = { agentId: agentId, text: `${agentId} has joined the group` } as AgentMessage;
        this._hubConnection.start()
        this._hubConnection.invoke('JoinGroup', joinedMessage);
    }

    public leaveGroup(agentId: string) {
        let leftMessage = { agentId: agentId, text: `${agentId} has left the group` } as AgentMessage;
        this._hubConnection.invoke('LeftGroup', leftMessage);
        this._hubConnection.stop();
    }

    public getGroupAgents(agentId: string): Observable<Agent[]> {
        return this.http.get(this.connectedAgentsUrl + agentId, this.getRequestOptions())
            .retry(2)
            .map((response: Response) => response.json() as Agent[])
            .catch(this.httpRequestError);    
    }

    public getGroupMessages(agentId: string): Observable<AgentMessage[]> {
        return this.http.get(this.groupMessagesUrl + agentId, this.getRequestOptions())
            .retry(2)
            .map((response: Response) => response.json() as AgentMessage[])
            .catch(this.httpRequestError);
    }

    public getRequestOptions(): RequestOptions {
        let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }

    public httpRequestError(error: any): Observable<any> {
        if (error instanceof Response) {
            var errMessage;
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(
                { message: 'Http request error', stackTrace: errMessage, level: 2 } as ErrorMessage);
        }
        return Observable.throw(error);
    }

    private init() {
        this._hubConnection = new HubConnection('/agent');

        this._hubConnection.on('Send', (agentMessage: AgentMessage) => {
            this.agentMessageStream.next(agentMessage);
        });

        this._hubConnection.on('JoinGroup', (agentMessage: AgentMessage) => {
            this.agentMessageStream.next(agentMessage);
        });

        this._hubConnection.on('LeaveGroup', (agentMessage: AgentMessage) => {
            this.agentMessageStream.next(agentMessage);
        });

        this._hubConnection.start()
            .then(() => {
                console.log('Hub connection has started')
            })
            .catch(err => {
                console.log('Error while establishing connection')
            });
    }
}