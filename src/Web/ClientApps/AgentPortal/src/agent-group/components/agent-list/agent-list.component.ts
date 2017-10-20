import { Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Agent } from '../../models/agent.model';

@Component({
    selector: 'agent-list',
    templateUrl: './agent-list.component.html',
    styleUrls: ['./agent-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentListComponent implements OnInit {

    @Input()
    agents: Agent[];
    constructor() { }
    ngOnInit() {
        console.log('we received the agents ' + this.agents!);
    }
}