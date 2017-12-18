﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentHubGateway } from './agent.hub.gateway';
import { AgentGroupService } from './agent-group.service';
import { GroupChatService } from './group-chat.service';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    providers: [
        AgentHubGateway,
        AgentGroupService,
        GroupChatService,

    ]
})
export class CoreModule { }