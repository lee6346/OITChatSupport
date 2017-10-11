import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'agent',
    templateUrl: './agent.component.html',
    styleUrls: ['./agent.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentComponent {
    //@Input()
    //agent: AgentVm;

    constructor() { }

}