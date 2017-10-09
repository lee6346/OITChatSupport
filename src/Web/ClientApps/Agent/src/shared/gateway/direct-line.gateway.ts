import { Injectable } from '@angular/core'
import { RestfulGateway } from './restful.gateway';
import { DirectLine, Conversation, Activity, ConnectionStatus } from 'botframework-directlinejs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DirectLineGateway extends RestfulGateway{

    private directLineBaseUrl: string = 'https://directline.botframework.com/';
    private newThreadUrl: string = 'v3/api/conversations';


    getNewConnection$(conversationId: string): Observable<Conversation> {
        return this.http.get<Conversation>(this.newThreadUrl);
    }

    getDirectLineThread$(conversationId: string): Observable<Activity> {
        return this.getNewConnection$(conversationId)
            .mergeMap((conversation: Conversation) => new DirectLine({
                token: conversation.token,
                conversationId: conversation.conversationId,
                webSocket: true,
                streamUrl: conversation.streamUrl
            }).activity$);
    }

    getCachedMessages$(conversationId: string, token: string): Observable<Activity[]> {
        return this.http.get(this.directLineBaseUrl);
    }


    mergeNewThread$(conversationId: string, threadPool: Observable<Activity>): Observable<Activity> {
        return threadPool.merge(this.getDirectLineThread$(conversationId));
    }


    sendMessage(directLine: DirectLine, activity: Activity): Observable<string> {
        return directLine.postActivity(activity);

    }
    
    getConnectionStatus$ = (directLine: DirectLine) => directLine.connectionStatus$; 


}