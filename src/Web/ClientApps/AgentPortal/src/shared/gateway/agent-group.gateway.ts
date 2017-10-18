import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Agent } from '../model';
import { environment } from '../../../environments/environment';

@Injectable()
export class AgentGroupGateway{

    constructor(private http: HttpClient){
    }

    getAgents$(group: string): Observable<Agent[]> {
        return this.http.get<Agent[]>(
            environment.baseWebUrl +
            environment.agentGroup + '/' + group
        );
    }
    authorize(value: string): HttpHeaders {
        return new HttpHeaders().set('Authorization', value);
    }

    sendErrorReport(errorMessage: string): void {
        this.http.post<Response>(environment.baseWebUrl +
            environment.error, errorMessage)
            .retry(1)
            .subscribe(
            res => console.log('successfully sent'),
            err => console.error('error posting the error report'),
            () => console.log('completed')
        );
    }
}