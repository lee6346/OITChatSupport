import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Agent } from '../../model';


@Component({
    selector: 'agent-group',
    templateUrl: './agent-group.component.html',
    styleUrls: ['./agent-group.component.css'],
})
export class AgentGroupComponent {

    @Input()
    private agentGroup: Agent[];
    

    constructor() { }


}