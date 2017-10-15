import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AgentsState } from '../store/reducer/agents.reducer';
import { RetrieveGroupAgentsAction } from '../store/action/agents.action';
import { Agent } from '../shared/model/agent.model';

@Component({
    selector: 'agent-group',
    templateUrl: './agent-group.component.html',
    styleUrls: ['./agent-group.component.css']
})
export class AgentGroupComponent implements OnInit {

    agents$: Observable<Agent[]>;
    constructor(    
        private store: Store<AgentsState>
    ) { console.log('hooking up the agent logins'); }

    ngOnInit() {
        this.agents$ = this.store.select(state => state.agents);
        console.log('retrieving agents');
        this.store.dispatch(new RetrieveGroupAgentsAction('jvr632'));
    }
}