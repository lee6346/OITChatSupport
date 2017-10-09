import { RestfulGateway } from './restful.gateway';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LiveRequest } from '../model/live-request.model';

@Injectable()
export class LiveRequestGateway extends RestfulGateway{

    private liveRequestsUrl: string = 'api/LiveSupport/GetRequests';
    private acceptRequestUrl: string = 'api/LiveSupport/AcceptRequest';

    getLiveRequests$(agentId: string): Observable<LiveRequest[]>{
        return this.http.get<LiveRequest[]>(
            this.baseUrl + this.liveRequestsUrl,
            this.queryString('id', agentId)
        );
    }

    acceptLiveRequest$(liveRequest: LiveRequest): Observable<any> {
        return this.http.post<any>(
            this.baseUrl + this.acceptLiveRequest$,
            liveRequest
        );
    }

}