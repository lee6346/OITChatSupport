import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getAgents } from '../store/reducer';
import { Agent } from '../shared/model/agent.model';

@Component({
    selector: 'agent-group',
    templateUrl: './agent-group.component.html',
    styleUrls: ['./agent-group.component.css']
})
export class AgentGroupComponent implements OnInit {

    agents$: Observable<Agent[]>;
    constructor(
        private store: Store<any>
    ) {
      
    }

    ngOnInit() { }
}