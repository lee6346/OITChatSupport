import { Injectable, } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HubConnection } from '@aspnet/signalr-client';

import { LiveRequest, ErrorMessage } from '../model';
import { Observable, Subject } from 'rxjs/Rx';

/**
 * Live request services for agents to retrieve requests and accept them
 */
@Injectable()
export class LiveRequestService {

    private acceptLiveRequestUrl: string = 'http://localhost:5000/api/AgentTransfer/AcceptRequest';
    private pendingRequestsUrl: string = 'http://localhost:5000/api/AgentTransfer/PendingRequests';

    private _hubConnection: HubConnection = new HubConnection('/agent');

    
    constructor(private http: Http) { }

    public retrievePendingRequests$(): Observable<LiveRequest> {
        return this.http.get(
            this.pendingRequestsUrl,
            this.getRequestOptions())
            .retry(2)
            .map((response: Response) => response.json())
            .flatMap(item => item)
            .catch(this.httpRequestError);    
    }

    public acceptLiveRequest$(liveRequest: LiveRequest): Observable<Response> {
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

    public httpRequestError(error: any): Observable<any> {
        if (error instanceof Response) {
            var errMessage;
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(
                { message: 'Http failure', stackTrace: errMessage, level: 1 } as ErrorMessage);
        }
        return Observable.throw(error);
    }

    private startHubConnection(): void {
        this._hubConnection.start()
            .then(() => {
                console.log('connection has started');
            })
            .catch(err => {
                console.log('error occurred');
            });
    }

    public registerServerEvents(): void {

        this.startHubConnection();
    }

}