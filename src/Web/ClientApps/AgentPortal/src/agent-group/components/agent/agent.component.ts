import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Agent } from '../../models/agent.model';

@Component({
    selector: 'agent',
    templateUrl: './agent.component.html',
    styleUrls: ['./agent.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentComponent implements OnInit{

    @Input()
    agent: Agent
    constructor() { }
    ngOnInit() {
        console.log(this.agent);
    }
}