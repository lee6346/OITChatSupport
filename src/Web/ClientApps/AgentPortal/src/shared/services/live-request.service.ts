import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Conversation } from 'botframework-directlinejs';
import { LiveRequest } from '../../livesupport/models';
import { AgentHubGateway } from './agent.hub.gateway';
import { environment } from '../../../environments/environment';

@Injectable()
export class LiveRequestService{ 

    constructor(
        private http: HttpClient,
        private agentHubGateway: AgentHubGateway
    ) { }

    getLiveRequests$(group: string): Observable<LiveRequest[]>{
        console.log('Gateway: making http call to retrieve requests');
        return this.http.get<LiveRequest[]>(
            environment.baseWebUrl +
            environment.liveRequests +
            '/' + group
        );
    }

    acceptLiveRequest$(liveRequest: LiveRequest): Observable<Conversation> {
        return this.http.post<any>(
            environment.baseWebUrl + 
            environment.acceptRequest,
            liveRequest
        );
    }

    authorize(value: string): HttpHeaders {
        return new HttpHeaders().set('Authorization', value);
    }

    sendErrorReport(errorMessage: string): void {
        this.http.post<Response>(
            environment.baseWebUrl +
            environment.error,
            errorMessage)
            .retry(1)
            .subscribe(
            res => console.log('successfully sent'),
            err => console.error('error posting the error report'),
            () => console.log('completed')
        );
    }
    
}