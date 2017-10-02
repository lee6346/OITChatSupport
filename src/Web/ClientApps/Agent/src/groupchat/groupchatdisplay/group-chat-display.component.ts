import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { AgentMessage } from '../../model';

@Component({
    selector: 'group-chat-display',
    templateUrl: './group-chat-display.component.html',
    styleUrls: ['./group-chat-display.component.css'],
})
export class GroupChatDisplayComponent implements OnInit, OnDestroy {

    
    private groupChatMessages: AgentMessage[] = [];

    @Input()
    set newAgentMessage(agentMessage: AgentMessage) {
        this.groupChatMessages.push(agentMessage);
    }

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() {}

}