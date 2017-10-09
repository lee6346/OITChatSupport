import { Component, Input, ViewChild, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { AgentVm } from '../../models/agent.vm';

@Component({
    selector: 'agent-list',
    templateUrl: './agent-list.component.html',
    styleUrls: ['./agent-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentListComponent implements OnChanges {
    @Input()
    agents: AgentVm[] = [];

    @V

}