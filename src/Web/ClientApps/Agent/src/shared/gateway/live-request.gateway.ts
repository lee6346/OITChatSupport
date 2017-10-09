import { RestfulGateway } from './restful.gateway';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LiveRequest } from '../model/live-request.model';

@Injectable()
export class LiveRequestGateway extends RestfulGateway{

    private liveRequestsUrl: string = 'api/LiveRequest/GetRequests';

    getLiveRequests$(): Observable<LiveRequest[]>{
        return this.http.get<LiveRequest[]>(this.baseUrl + this.liveRequestsUrl);
    }

}