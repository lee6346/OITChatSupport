import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AgentVm } from './models/agent.vm';
import * as agentActions from '../store/action/agents.action';
import { AgentsState } from '../store/state/agents.state';
import { Agent } from '../shared/model/agent.model';

@Component({
    selector: 'agent-group',
    templateUrl: './agent-group.component.html',
    styleUrls: ['./agent-group.component.css']
})
export class AgentGroupComponent {

    agents$: Observable<Agent[]>;

    constructor(
        private store: Store<AgentsState>
    ) {
        this.agents$ = this.store.select<Agent[]>(state => state.agents)
    }
}