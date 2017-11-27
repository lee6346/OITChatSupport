import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AgentMessage } from '../../models';
@Component({
    selector: 'agent-message',
    templateUrl: './agent-message.component.html',
    styleUrls: ['./agent-message.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentMessageComponent {

    @Input()
    groupMessage: AgentMessage;

    constructor() { }

}