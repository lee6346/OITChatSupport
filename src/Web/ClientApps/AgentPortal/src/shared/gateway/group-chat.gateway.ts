import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgentMessage } from '../model';

@Injectable()
export class GroupChatGateway {

    private groupMessagesUrl: string = 'http://localhost:5000/api/ChatMessage/GetMessages/';
    private errorUrl: string = 'http://localhost:5000/home/error';

    constructor(private http: HttpClient) {
    }

    getMessages$(agentId: string): Observable<AgentMessage[]> {
        return this.http.get<AgentMessage[]>(
            this.groupMessagesUrl + agentId
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