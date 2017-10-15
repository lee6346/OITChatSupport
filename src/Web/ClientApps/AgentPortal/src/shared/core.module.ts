import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentGroupGateway } from './gateway/agent-group.gateway';
import { GroupChatGateway } from './gateway/group-chat.gateway';
import { DirectLineGateway } from './gateway/direct-line.gateway';
import { AgentHubGateway } from './gateway/agent.hub.gateway';
import {  LiveRequestGateway } from './gateway/live-request.gateway';
import { AgentGroupService } from './services/agent-group.service';
import {  DirectLineService  } from './services/direct-line.service';
import { GroupChatService } from './services/group-chat.service';
import {  LiveRequestService  } from './services/live-request.service';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    providers: [
        AgentGroupGateway,
        AgentHubGateway,
        DirectLineGateway,
        GroupChatGateway,
        LiveRequestGateway,
        AgentGroupService,
        DirectLineService,
        GroupChatService,
        LiveRequestService
    ]
})
export class CoreModule { }