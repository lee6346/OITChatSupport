import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Conversation } from 'botframework-directlinejs';

import { LiveRequest } from '../models';


@Injectable()
export class LiveRequestService {

    private pendingRequestsApi: string = 'http://localhost:5000/api/agentsupport/currentrequests';
    private acceptRequestApi: string = 'http://localhost:5000/api/agentsupport/acceptrequest';

    constructor(private http: HttpClient) { }

    getLiveRequests$(): Observable<LiveRequest[]> {
        return this.http.get<LiveRequest[]>(this.pendingRequestsApi);
    }

    acceptLiveRequest$(liveRequest: LiveRequest): Observable<Conversation> {
        return this.http.post<Conversation>(this.acceptRequestApi, liveRequest);
    }
}