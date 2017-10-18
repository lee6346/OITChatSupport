import { Injectable } from '@angular/core'
import { Activity } from 'botframework-directlinejs';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { DirectLineConnection } from '../model';
import { environment } from '../../../environments/environment';

@Injectable()
export class DirectLineGateway{

    constructor(private http: HttpClient) {
    }

    getCachedMessages$(conversationId: string): Observable<Activity[]> {
        return this.http.get<Activity[]>(
            environment.directLineUrl +
            environment.activities(conversationId)
        );
    }

    getNewConnection$(conversationId: string): Observable<DirectLineConnection> {
        return this.http.get<DirectLineConnection>(
            environment.baseWebUrl +
            environment.chatStreamUrl + '/' +
            conversationId
        );
    }

    authorize(value: string): HttpHeaders {
        return new HttpHeaders().set('Authorization', value);
    }

    sendErrorReport(errorMessage: string): void {
        this.http.post<Response>(
            environment.baseWebUrl +
            environment.error, errorMessage)
            .retry(1)
            .subscribe(
            res => console.log('successfully sent'),
            err => console.error('error posting the error report'),
            () => console.log('completed')
        );
    }
}