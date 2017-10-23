import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'agent-message',
    templateUrl: './agent-message.component.html',
    styleUrls: ['./agent-message.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentMessageComponent {

    @Input()
    groupMessage: string;

    constructor() { }

}