import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromAgentGroup from '../reducers/index';
import * as agentGroup from '../actions/agent-group.actions';
import { Agent } from '../models';
import { List } from 'immutable';

@Component({
    selector: 'agent-group',
    template: `
        <div class="agents-frame">
        <div class="agents-header">
            <h4 class="agents-title">Agents</h4>
        </div>
        <div class="agents-body">
            <agent-list [agents]="agentGroup$ | async"></agent-list>
        </div>
    </div>
    `,
    styleUrls: ['./agent-group.component.css']
})
export class AgentGroupComponent implements OnInit {

    agentGroup$: Observable<Agent[]>;
    constructor(    
        private store: Store<fromAgentGroup.State>
    ) {
        this.agentGroup$ = store.select(fromAgentGroup.getGroupMembers).map((item: List<Agent>) => item.toArray());
    }

    ngOnInit() {
        console.log('retrieving agents');
        this.store.dispatch(new agentGroup.LoadAgentsAction('AskRowdy'));
    }
}