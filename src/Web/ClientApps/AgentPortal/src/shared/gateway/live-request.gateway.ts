import { RestfulGateway } from './restful.gateway';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { LiveRequest } from '../model';

@Injectable()
export class LiveRequestGateway extends RestfulGateway{

    private liveRequestsUrl: string = 'api/LiveSupport/GetRequests/';
    private acceptRequestUrl: string = 'api/LiveSupport/AcceptRequest';

    constructor(http: HttpClient) {
        super(http);
    }

    getLiveRequests$(agentId: string): Observable<LiveRequest[]>{
        return this.http.get<LiveRequest[]>(
            this.baseUrl + this.liveRequestsUrl + agentId
        );
    }

    acceptLiveRequest$(liveRequest: LiveRequest): Observable<any> {
        return this.http.post<any>(
            this.baseUrl + this.acceptRequestUrl,
            liveRequest
        );
    }

}