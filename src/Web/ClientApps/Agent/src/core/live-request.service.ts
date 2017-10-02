import { Injectable, } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HubConnection, TransportType, ConsoleLogger } from '@aspnet/signalr-client';

import { LiveRequest, ErrorMessage } from '../model';
import * as Rx from 'rxjs/Rx';

/**
 * Live request services for agents to retrieve requests and accept them
 */
@Injectable()
export class LiveRequestService {

    private acceptLiveRequestUrl: string = '/api/AgentTransfer/AcceptRequest';
    private pendingRequestsUrl: string = './api/AgentTransfer/PendingRequests';

    private _hubConnection: HubConnection = new HubConnection('/agent');
    

    constructor(private http: Http) {


    }
    /*
    public acceptLiveRequest$(conversationId: string, user: string, botHandle: string): Rx.Observable<Response> {
        return this.http.post(
            this.acceptLiveRequestUrl,
            { conversationId: conversationId, user: user, botHandle: botHandle} as LiveRequest,
            this.getRequestOptions())
            .retry(2)
            .map((response: Response) => response.json())
            .catch(this.httpRequestError);
    }
    */
    public retrievePendingRequests$(): Rx.Observable<LiveRequest[]> {
        return this.http.get(
            this.pendingRequestsUrl,
            this.getRequestOptions())
            .retry(2)
            .map((response: Response) => response.json())
            .catch(this.httpRequestError);    
    }

    public acceptLiveRequest$(liveRequest: LiveRequest): Rx.Observable<Response> {
        return this.http.post(
            this.acceptLiveRequestUrl,
            liveRequest,
            this.getRequestOptions()
        ).retry(2)
            .map((response: Response) => response.json())
            .catch(this.httpRequestError);
    }

    public getRequestOptions(): RequestOptions {
        let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }

    public httpRequestError(error: any): Rx.Observable<any> {
        if (error instanceof Response) {
            var errMessage;
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Rx.Observable.throw(
                { message: 'Http failure', stackTrace: errMessage, level: 1 } as ErrorMessage);
        }
        return Rx.Observable.throw(error);
    }
}