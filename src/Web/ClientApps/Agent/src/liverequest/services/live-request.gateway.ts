import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RestfulGateway } from '../../shared/gateway/restful.gateway';
import { LiveRequest } from '../../model/live-request.model';

@Injectable()
export class LiveRequestGateway extends RestfulGateway {


    get(url: string, params: any): Observable<LiveRequest[]>{
        return this.http.get<LiveRequest[]>(url);
    }

    post(url: string, body: any, params: any): Observable<LiveRequest> {
        return this.http.post<LiveRequest>(url, body);
    }
}