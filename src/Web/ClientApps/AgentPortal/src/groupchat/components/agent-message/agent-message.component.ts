import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'agent-message',
    templateUrl: './agent-message.component.html',
    styleUrls: ['./agent-message.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentMessageComponent implements OnInit {

    @Input()
    groupMessage: string;

    constructor() { }

    ngOnInit() { }
}