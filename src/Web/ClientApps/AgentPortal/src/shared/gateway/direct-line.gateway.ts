import { Injectable } from '@angular/core'
import { Activity } from 'botframework-directlinejs';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { DirectLineConnection } from '../model';

@Injectable()
export class DirectLineGateway{

    private newThreadUrl: string = 'http://localhost:5000/api/directline/getstreamurl/'
    private directLineBaseUrl: string = 'https://directline.botframework.com/';
    private directLineApiUrl: string = 'v3/directline/conversations';
    private errorUrl: string = 'http://localhost:5000/home/error';

    constructor(private http: HttpClient) {
    }

    getCachedMessages$(conversationId: string): Observable<Activity[]> {
        return this.http.get<Activity[]>(
            this.directLineBaseUrl +
            this.directLineApiUrl +
            conversationId + '/activities'
        );
    }

    getNewConnection$(conversationId: string): Observable<DirectLineConnection> {
        return this.http.get<DirectLineConnection>(
            this.newThreadUrl + conversationId
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