import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AgentGroupService } from '../shared/services/agent-group.service';

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
    ) {}
    ngOnInit() {
        console.log('logged in as jvr632');
    }
}