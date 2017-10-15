import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LiveRequest } from '../model';

@Injectable()
export class LiveRequestGateway{

    private liveRequestsUrl: string = 'http://localhost:5000/api/LiveSupport/GetRequests/';
    private acceptRequestUrl: string = 'http://localhost:5000/api/LiveSupport/AcceptRequest';
    private errorUrl: string = 'http://localhost:5000/home/error';

    constructor(private http: HttpClient) {
    }

    getLiveRequests$(agentId: string): Observable<LiveRequest[]>{
        return this.http.get<LiveRequest[]>(
            this.liveRequestsUrl + agentId
        );
    }

    acceptLiveRequest$(liveRequest: LiveRequest): Observable<any> {
        return this.http.post<any>(
            this.acceptRequestUrl,
            liveRequest
        );
    }

    authorize(value: string): HttpHeaders {
        return new HttpHeaders().set('Authorization', value);
    }

    sendErrorReport(errorMessage: string): void {
        this.http.post<Response>(this.errorUrl, errorMessage)
            .retry(1)
            .subscribe(
            res => console.log('successfully sent'),
            err => console.error('error posting the error report'),
            () => console.log('completed')
            );
    }
}