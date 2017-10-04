import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DirectLine, Conversation, Activity, ConnectionStatus, Message } from 'botframework-directlinejs';
import { ErrorMessage, DirectLineConnection } from '../model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DirectLineService {

    private directLineConnectionUrl: string = 'http://localhost:5000/api/DirectLine/GetStreamUrl';
    private directLineCachedConversationUrl: string = 'https://directline.botframework.com/v3/directline/conversations/' 
    private storeDirectLineMessageUrl: string = 'http://localhost:5000/api/ChatMessage/Store';


    


    constructor(
        private http: Http
    ) {
    }

    public getConnectionStream$(conversationId: string): Observable<Conversation> {
        return this.http.get(this.directLineConnectionUrl + conversationId, this.getRequestOptions())
            .map((res: Response) => res.json() as Conversation)
            .catch(this.httpRequestError);
    }

    public getCachedMessages(conversationId: string, token: string): Observable<Message[]> {
        return this.http.get(
            this.directLineCachedConversationUrl + conversationId + '/activities',
            this.getRequestOptions())
            .retry(2)
            .map((response: Response) => response.json())
            .catch(this.httpRequestError);
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

    public sendMessage$(directLine: DirectLine, message: string): Observable<string> {
        return directLine.postActivity(
            { from: { id: 'user' }, type: 'message', text: message } as Activity)
            .catch(this.httpRequestError);
    }

    public storeActivity$(activity: Activity): Observable<Response> {
        return this.http.post(
            this.storeDirectLineMessageUrl,
            activity,
            this.getRequestOptions())
            .retry(2)
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
                { message: 'Http request error', stackTrace: errMessage, level: 2 } as ErrorMessage);
        }
        return Observable.throw(error);
    }

    public getConnectionStatus$(directLine: DirectLine): Observable<ConnectionStatus> {
        return directLine.connectionStatus$;
    }

}