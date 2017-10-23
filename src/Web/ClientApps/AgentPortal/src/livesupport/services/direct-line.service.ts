import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { DirectLine, Conversation, Activity } from 'botframework-directlinejs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { State } from '../reducers/index';
import { DirectLineThread, DirectLineChatLoad, DirectLineMessage } from '../models';
import { 
    MessageActivityReceivedAction,
    MessageActivitySentAction
} from '../actions/directline-message.actions';
import { environment } from '../../../environments/environment';

@Injectable()
export class DirectLineService {

    constructor(
        private http: HttpClient,
        private store: Store<State>
    ) {}

    createDirectLineConnection$(conversationId: string): Observable<DirectLineThread> {
        return this.http.get<Conversation>(
            environment.baseWebUrl +
            environment.chatStreamUrl + '/' +
            conversationId
        ).map((conversation: Conversation) => this.createDirectLineThread(conversation));
    }
    
    createDirectLineThread(conversation: Conversation): DirectLineThread {
        let session: DirectLineThread = {
            conversationId: conversation.conversationId,
            connection: new DirectLine({
                conversationId: conversation.conversationId,
                token: conversation.token,
                streamUrl: conversation.streamUrl
            }),
            active: true,
            messageIds: [],
            cachedMessageIds: []
        };
        session.connection.activity$
            .filter(this.filterStudentMessage).subscribe(
            (activity: Activity) =>  this.store.dispatch(new MessageActivityReceivedAction(activity)),
            (err: any) => console.log('direct line service error: failed to received activities via connector'),
        );
        return session;
    }

    getCachedActivities$(conversation: Conversation): Observable<Activity[]>{
        return this.http.get<Activity[]>(
            environment.directLineUrl +
            environment.postMessage + conversation.conversationId +
            '/activities', { headers: new HttpHeaders().set('Authorization', 'Bearer ' + conversation.token) }
        );
    }

    sendMessage$(directLinePayload: DirectLineChatLoad): Observable<Activity> {
        return directLinePayload.connection.postActivity(directLinePayload.activity)
            .map((id: string) => { directLinePayload.activity.id = id; return directLinePayload.activity });
        /*
        directLinePayload.connection.postActivity(directLinePayload.activity).subscribe(
            (id: string) => {
                directLinePayload.activity.id = id;
                this.store.dispatch(new MessageActivitySentAction(directLinePayload.activity));
            },
            (err: any) => console.log('direct line service error: failed to send activity via connector')
        );*/
    }

    removeConnection(directLine: DirectLine): void {
        directLine.end();
    }

    authorize(token: string): HttpHeaders {
        return new HttpHeaders({'Content-Type': 'application/json'}).set('Authorization', 'Bearer ' + token);
    }

    sendErrorReport(errorMessage: string): void {
        this.http.post<Response>(
            environment.baseWebUrl +
            environment.error, errorMessage)
            .retry(1)
            .subscribe(
            res => console.log('successfully sent'),
            err => console.error('error posting the error report')
        );
    }
    filterStudentMessage = (activity: Activity) => activity.from.id === 'student';
}
