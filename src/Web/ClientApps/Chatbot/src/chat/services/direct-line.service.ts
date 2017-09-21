﻿import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DirectLine, Conversation, Activity, ConnectionStatus } from 'botframework-directlinejs';
import { API_CONFIG, ApiConfig } from '../../chatbot-config.module';

import { ErrorMessage } from '../../model';

import * as Rx from 'rxjs/Rx';

@Injectable()
export class DirectLineService {

    constructor(
        private http: Http,
        @Inject(API_CONFIG) private apiConfig: ApiConfig
    ) { }

    public getToken$(): Rx.Observable<Conversation> {
        return this.http.get(this.apiConfig.oitEndpoint + this.apiConfig.oitTokenUri, this.getRequestOptions())
            .retry(3)
            .map((res: Response) => res.json() as Conversation)
            .catch(this.tokenError);
    }


    public connectToDirectLine(conversation: Conversation): DirectLine {
        return new DirectLine({
            token: conversation['token'],
            webSocket: true
        });
    }

    public filterByParticipant$(user: string, activity: Activity): boolean {
        return activity['from']['name'] === user;
    }

    public filterByActivity$(activityTypes: string[], activity: Activity): boolean {
        return activityTypes.indexOf(activity.type) !== -1;
    }

    public sendMessage$(directLine: DirectLine, message: string): Rx.Observable<string> {
        return directLine.postActivity(
            { from: { id: 'user' }, type: 'message', text: message } as Activity)
            .catch(this.directLineChatError);
    }

    public storeActivity$(activity: Activity): Rx.Observable<Response> {
        return this.http.post(
            this.apiConfig.oitEndpoint + this.apiConfig.oitMessageUri,
            activity,
            this.getRequestOptions())
            .retry(2)
            .map((response: Response) => response.json())
            .catch(this.messageStorageError);

    }

    public getRequestOptions(): RequestOptions {
        return new RequestOptions(new Headers({ 'Content-Type': 'application/json' }));
    }

    public tokenError(error: any): Rx.Observable<any> {
        if (error instanceof Response) {
            var errMessage;
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Rx.Observable.throw(
                {errorMessage: 'Http Error receiving a token', errorStackTrack: errMessage, errorLevel: 2} as ErrorMessage);
        }
        return Rx.Observable.throw(error);
    }

    public messageStorageError(error: any): Rx.Observable<any> {
        if (error instanceof Response) {
            var errMessage;
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Rx.Observable.throw(
                { errorMessage: 'Http failed to store message', errorStackTrack: errMessage, errorLevel: 1 } as ErrorMessage);
        }
        return Rx.Observable.throw(error);
    }

    public directLineChatError(error: any): Rx.Observable<any> {
        if (error instanceof Response) {
            var errMessage;
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Rx.Observable.throw(
                { errorMessage: 'Failed to send message to DirectLine API', errorStackTrack: errMessage, errorLevel: 2 } as ErrorMessage);
        }
        return Rx.Observable.throw(error);
    }

    public restartConnection(directLine: DirectLine): void {
        this.getToken$()
            .map((conversation: Conversation) => directLine.reconnect(conversation))
            .catch(err => { return Rx.Observable.throw(err);});
    }

    public resumeConnection$(conversationId: string, token: string): Rx.Observable<DirectLine> {
        return Rx.Observable.of(new DirectLine({
            token: token,
            conversationId: conversationId
        }));
    }


    public getConnectionStatus$(directLine: DirectLine): Rx.Observable<ConnectionStatus> {
        return directLine.connectionStatus$;
    }

    public endConnection(directLine: DirectLine): void {
        directLine.end();
    }
}