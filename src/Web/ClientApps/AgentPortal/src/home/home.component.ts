import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AgentGroupService } from '../shared/services/agent-group.service';
import { Agent } from '../agent-group/models/agent.model';

@Component({
    selector: 'agent-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    private agentId: string = 'jvr632';
    private group: string = 'AskRowdy';

    constructor(
        private agentGroupService: AgentGroupService
    ) {
        /*
        let x = {} as Agent;
        x.agentId = this.agentId;
        x.botHandle = this.group;
        x.connected = true;
        this.agentGroupService.join(x); */
    }

    ngOnInit() {
        console.log('logged in as jvr632');
    }


}