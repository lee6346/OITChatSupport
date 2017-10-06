import { Component, Input } from '@angular/core';

import { AgentMessage } from '../../model';

@Component({
    selector: 'group-chat-display',
    templateUrl: './group-chat-display.component.html',
    styleUrls: ['./group-chat-display.component.css'],
})
export class GroupChatDisplayComponent {

    /*
    private groupChatMessages: AgentMessage[] = [];

    @Input()
    set newAgentMessage(agentMessage: AgentMessage) {
        this.groupChatMessages.push(agentMessage);
    }
    */

    @Input()
    private groupMessages: AgentMessage[];

    constructor() { }

}