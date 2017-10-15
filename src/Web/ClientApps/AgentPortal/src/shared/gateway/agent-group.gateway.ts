import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Agent } from '../model';

@Injectable()
export class AgentGroupGateway{

    private agentGroupUrl: string = 'http://localhost:5000/api/Agent/GetGroup/';
    private errorUrl: string = 'http://localhost:5000/home/error';
    constructor(private http: HttpClient){
    }

    getAgents$(agentId: string): Observable<Agent[]> {
        return this.http.get<Agent[]>(
            this.agentGroupUrl + agentId
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