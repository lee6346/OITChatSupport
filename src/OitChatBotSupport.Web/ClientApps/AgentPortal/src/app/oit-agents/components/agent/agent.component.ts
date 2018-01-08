import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Agent } from '../../models/agent.model';


@Component({
    selector: 'agent',
    templateUrl: './agent.component.html',
    styleUrls: ['./agent.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentComponent{

    @Input()
    agent: Agent

    constructor() { }
}