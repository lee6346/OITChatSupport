import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AgentGroupService } from '../shared/agent-group.service';
import { Agent } from '../agent-group/models/agent.model';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    constructor(
    ) {
    }

    ngOnInit() {
    }


}