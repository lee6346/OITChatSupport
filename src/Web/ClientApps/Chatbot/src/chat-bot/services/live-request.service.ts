import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { LiveRequest } from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class LiveRequestService {

    constructor(
        private http: HttpClient
    ) { }

    public sendLiveRequest$(request: LiveRequest): void {
        this.http.post<Response>(
            environment.baseWebUrl +
            environment.makeLiveRequest, request)
            .subscribe(
            next => console.log('sent request'),
            (err: any) => console.log('error sending requets'),
            () => console.log('completed')
        );
    }

    public cancelLiveRequest$(request: LiveRequest): void {
        this.http.post<Response>(
            environment.baseWebUrl +
            environment.cancelLiveRequest, request)
            .subscribe(
            next => console.log('cancel request'),
            (err: any) => console.log('error cancelling requets'),
            () => console.log('completed')
        );
    }
}