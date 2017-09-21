import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { API_CONFIG, ApiConfig } from '../../chatbot-config.module';
import { LiveRequest, ErrorMessage } from '../../model';

import * as Rx from 'rxjs/Rx';

@Injectable()
export class LiveRequestService {

    constructor(
        @Inject(API_CONFIG) private apiConfig: ApiConfig,
        private http: Http
    ) { }

    public sendLiveRequest$(conversationId: string, user: string, botHandle: string): Rx.Observable<Response> {
        return this.http.post(
            this.apiConfig.oitEndpoint + this.apiConfig.oitLiveTransferUri,
            { conversationId: conversationId, user: user, action: 'request', botHandle: botHandle } as LiveRequest,
            this.getRequestOptions())
            .map(res => res.json())
            .catch(this.liveRequestError);
    }

    public cancelLiveRequest$(conversationId: string, user: string, botHandle: string): Rx.Observable<Response> {
        return this.http.post(
            this.apiConfig.oitEndpoint + this.apiConfig.oitCancelTransferUri,
            { conversationId: conversationId, user: user, action: 'remove', botHandle: botHandle } as LiveRequest,
            this.getRequestOptions())
            .map(res => res.json())
            .catch(this.liveRequestError);
    }

    public getRequestOptions(): RequestOptions {
        return new RequestOptions(new Headers({ 'Content-Type': 'application/json' }));
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