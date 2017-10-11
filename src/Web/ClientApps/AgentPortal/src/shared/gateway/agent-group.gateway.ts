import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Agent } from '../model';
import { RestfulGateway } from './restful.gateway';

@Injectable()
export class AgentGroupGateway extends RestfulGateway{

    private agentGroupUrl: string = 'api/Agent/GetGroup/';

    constructor(http: HttpClient){
        super(http);
    }

    getAgents$(agentId: string): Observable<Agent[]> {
        return this.http.get<Agent[]>(
            this.baseUrl + this.agentGroupUrl + agentId
        );
    }
}