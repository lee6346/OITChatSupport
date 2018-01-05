import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AgentMessage } from '../../models';
@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent {

    @Input()
    groupMessages: AgentMessage[];

    constructor() { }

}