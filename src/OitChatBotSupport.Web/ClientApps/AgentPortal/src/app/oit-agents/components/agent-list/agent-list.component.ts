import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Agent } from '../../models/agent.model';


@Component({
    selector: 'agent-list',
    templateUrl: './agent-list.component.html',
    styleUrls: ['./agent-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentListComponent {

    @Input()
    agents: Agent[];

    constructor() { }
}