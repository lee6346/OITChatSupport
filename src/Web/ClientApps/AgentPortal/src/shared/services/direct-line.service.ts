import { Injectable } from '@angular/core';
import { DirectLineGateway } from '../gateway/direct-line.gateway';
import { AgentHubGateway } from '../gateway/agent.hub.gateway';
import { DirectLine, Conversation, Activity, ConnectionStatus } from 'botframework-directlinejs';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class DirectLineService {

    constructor(
        directLineGateway: DirectLineGateway,
        store: Store<any>
    ) { }


    



}
