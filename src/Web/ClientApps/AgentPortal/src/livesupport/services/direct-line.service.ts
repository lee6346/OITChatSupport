import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { DirectLine, Conversation, Activity } from 'botframework-directlinejs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { State } from '../reducers/index';
import { DirectLineThread, DirectLineChatLoad, DirectLineMessage } from '../models';
import { 
    ReceiveSessionActivityAction, 
    ReceiveSessionDisconnectAction, 
    SendSessionActivityCompleteAction 
} from '../actions/directline-session.actions';
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
            cachedMessageIds: [],
            unseenMessages: 0
        };
        session.connection.activity$
            .filter(this.filterStudentMessage).subscribe((activity: Activity) => 
                this.store.dispatch(new ReceiveSessionActivityAction(activity)),
                (err: any) => console.log('error'),
                () => console.log('complete'),
            );
        return session;
    }

    getCachedActivities$(conversationId: string): Observable<Activity[]>{
        return this.http.get<Activity[]>(
            environment.directLineUrl +
            environment.activities(conversationId) +
            '/activities'
        );
    }

    sendMessage(directLinePayload: DirectLineChatLoad) {
        directLinePayload.connection.postActivity(directLinePayload.activity).subscribe(
            (id: string) => {
                directLinePayload.activity.id = id;
                this.store.dispatch(new SendSessionActivityCompleteAction(directLinePayload.activity));
            },
            (err: any) => console.log('error sending message'),
            ()=> console.log('complete')
        );
    }

    removeConnection(directLine: DirectLine): void {
        directLine.end();
    }

    authorize(value: string): HttpHeaders {
        return new HttpHeaders().set('Authorization', value);
    }

    sendErrorReport(errorMessage: string): void {
        this.http.post<Response>(
            environment.baseWebUrl +
            environment.error, errorMessage)
            .retry(1)
            .subscribe(
            res => console.log('successfully sent'),
            err => console.error('error posting the error report'),
            () => console.log('completed')
        );
    }
    filterStudentMessage = (activity: Activity) => activity.from.id === 'student';
}
