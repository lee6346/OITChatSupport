import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromAgentGroup from './reducers/index';
import * as agentGroup from './actions/agent-group.actions';
import { Agent } from '../shared/model/agent.model';

@Component({
    selector: 'agent-group',
    templateUrl: './agent-group.component.html',
    styleUrls: ['./agent-group.component.css']
})
export class AgentGroupComponent implements OnInit {

    agentGroup$: Observable<Agent[]>;
    constructor(    
        private store: Store<fromAgentGroup.State>
    ) {
        console.log('hooking up the agent logins');
        this.agentGroup$ = store.select(fromAgentGroup.getAllGroupAgents);
    }

    ngOnInit() {
        console.log('retrieving agents');
        this.store.dispatch(new agentGroup.RetrieveGroupAgentsAction('jvr632'));
    }
}