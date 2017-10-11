import { Injectable } from '@angular/core'
import { DirectLine, Activity, ConnectionStatus } from 'botframework-directlinejs';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DirectLineConnection } from '../model';
import { RestfulGateway } from './restful.gateway';

@Injectable()
export class DirectLineGateway extends RestfulGateway{

    private newThreadUrl: string = 'api/directline/getstreamurl/'
    private directLineBaseUrl: string = 'https://directline.botframework.com/';
    private directLineApiUrl: string = 'v3/directline/conversations';

    constructor(http: HttpClient) {
        super(http);
    }

    getCachedMessages$(conversationId: string): Observable<Activity[]> {
        return this.http.get<Activity[]>(
            this.directLineBaseUrl +
            this.directLineApiUrl +
            conversationId + '/activities'
        );
    }

    getDirectLineSocket(directLineConnection: DirectLineConnection): DirectLine{
        return new DirectLine({
            conversationId: directLineConnection.conversationId,
            token: directLineConnection.token,
            streamUrl: directLineConnection.streamUrl
        });
    }

    getDirectLineThread$(directLineConnection: DirectLineConnection): Observable<Activity> {
        return this.getDirectLineSocket(directLineConnection).activity$;
    }

    getNewConnection$(conversationId: string): Observable<DirectLineConnection> {
        return this.http.get<DirectLineConnection>(
            this.baseUrl + this.newThreadUrl + conversationId
        );
    }
    
    private getConnectionStatus$ = (directLine: DirectLine): Observable<ConnectionStatus> => directLine.connectionStatus$; 
}