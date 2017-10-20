import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentHubGateway } from './services/agent.hub.gateway';
import { AgentGroupService } from './services/agent-group.service';
import { GroupChatService } from './services/group-chat.service';
import {  LiveRequestService  } from './services/live-request.service';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    providers: [
        AgentHubGateway,
        AgentGroupService,
        GroupChatService,
        LiveRequestService
    ]
})
export class CoreModule { }