import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { API_CONFIG, ApiConfig } from '../chatbot-config.module';
import { LiveRequest, ErrorMessage } from '../model';

import * as Rx from 'rxjs/Rx';

@Injectable()
export class LiveRequestService {

    private oitLiveTransferUri: string = 'http://localhost:5000/api/AgentTransfer/MakeRequest';
    private oitCancelTransferUri: string = 'http://localhost:5000/api/AgentTransfer/CancelRequest';

    constructor(
        //@Inject(API_CONFIG) private apiConfig: ApiConfig,
        private http: Http
    ) { }

    public sendLiveRequest$(conversationId: string, user: string, botHandle: string): Rx.Observable<Response> {
        return this.http.post(
            this.oitLiveTransferUri,
            { conversationId: conversationId, user: user, action: 'request', botHandle: botHandle } as LiveRequest,
            this.getRequestOptions())
            .map(res => res.json())
            .catch(this.liveRequestError);
    }

    public cancelLiveRequest$(conversationId: string, user: string, botHandle: string): Rx.Observable<Response> {
        return this.http.post(
            this.oitCancelTransferUri,
            { conversationId: conversationId, user: user, action: 'remove', botHandle: botHandle } as LiveRequest,
            this.getRequestOptions())
            .map(res => res.json())
            .catch(this.liveRequestError);
    }

    public getRequestOptions(): RequestOptions {
        let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }

    public liveRequestError(error: any): Rx.Observable<any> {
        if (error instanceof Response) {
            var errMessage;
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Rx.Observable.throw(
                { errorMessage: 'Http Server Error', errorStackTrack: errMessage, errorLevel: 2 } as ErrorMessage);
        }
        return Rx.Observable.throw(error);
    }
}