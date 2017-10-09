import { Injectable } from '@angular/core'
import { RestfulGateway } from './restful.gateway';
import { DirectLine, Conversation, Activity, ConnectionStatus } from 'botframework-directlinejs';
import { Observable } from 'rxjs/Observable';

import { DirectLineConnection } from '../model/directline-connection.model';

@Injectable()
export class DirectLineGateway extends RestfulGateway{


    private newThreadUrl: string = 'api/directline/getstreamurl'
    private directLineBaseUrl: string = 'https://directline.botframework.com/';
    private directLineApiUrl: string = 'v3/directline/conversations';

    getNewConnection$(conversationId: string): Observable<DirectLineConnection> {
        return this.http.get<DirectLineConnection>(
            this.baseUrl + this.newThreadUrl,
            this.queryString('id', conversationId)
        );
    }

    getDirectLineThread$(conversationId: string): Observable<Activity> {
        return this.getNewConnection$(conversationId)
            .mergeMap((directLineConn: DirectLineConnection) => new DirectLine({
                token: directLineConn.token,
                conversationId: directLineConn.conversationId,
                webSocket: true,
                streamUrl: directLineConn.streamUrl
            }).activity$);
    }

    getCachedMessages$(conversationId: string): Observable<Activity[]> {
        return this.http.get<Activity[]>(
            this.directLineBaseUrl +
            this.directLineApiUrl +
            conversationId + '/activities'
        );
    }


    mergeNewThread$(conversationId: string, threadPool: Observable<Activity>): Observable<Activity> {
        return threadPool.merge(this.getDirectLineThread$(conversationId));
    }


    sendMessage(directLine: DirectLine, activity: Activity): Observable<string> {
        return directLine.postActivity(activity);

    }
    
    getConnectionStatus$ = (directLine: DirectLine) => directLine.connectionStatus$; 


}