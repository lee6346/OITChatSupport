import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DirectLine, Conversation } from 'botframework-directlinejs';
import { API_CONFIG, ApiConfig } from '../chatbot-config.module';



import * as Rx from 'rxjs/Rx';

@Injectable()
export class DirectlineService {

    getTokenUrl: string = '/DirectLine/GetToken';

    constructor(
        private http: Http,
        @Inject(API_CONFIG) private apiConfig: ApiConfig
    ) { }

    public getToken$(): Rx.Observable<Conversation> {
        return this.http.get(this.apiConfig.oitEndpoint + this.getTokenUrl, this.getRequestOptions())
            .map((res: Response) => res.json() as Conversation)
            .catch(this.logError); 
    }

    public connectToBot(conversation: Conversation): DirectLine {
        return new DirectLine({
            token: conversation['token'],
            webSocket: true
        });
    }

    public getRequestOptions(): RequestOptions {
        return new RequestOptions(new Headers({ 'Content-Type': 'application/json' }));
    }

    public logError(error: any) {
        console.log('server error: ', error);
        if (error instanceof Response) {
            var errMessage;
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Rx.Observable.throw(errMessage);
        }
        return Rx.Observable.throw(error || 'Node.js server error');
    }
}