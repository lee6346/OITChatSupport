import { Component, Input, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'agent-list',
    templateUrl: './agent-list.component.html',
    styleUrls: ['./agent-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentListComponent implements OnInit {
    //@Input()
    //agents: AgentVm[] = [];

    @ViewChild('list')
    list: ElementRef;

    constructor() { }

    ngOnInit() { }

}