import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GroupChatComponent } from './containers/group-chat.component';
import { AgentGroupComponent } from './containers/agent-group.component';
import { AgentListComponent } from './components/agent-list/agent-list.component';
import { AgentComponent } from './components/agent/agent.component';
import { AgentMessageComponent } from './components/agent-message/agent-message.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { AgentGroupEffects } from './effects/agent-group.effects';
import { reducers } from './reducers/index';

@NgModule({
    imports: [
        SharedModule,
        StoreModule.forFeature('agentgroup', reducers),
        EffectsModule.forFeature([AgentGroupEffects]),
    ],
    declarations: [
        AgentGroupComponent,
        AgentListComponent,
        AgentComponent,
        GroupChatComponent,
        AgentMessageComponent,
        MessageListComponent,
        MessageInputComponent
    ],
    exports: [
        AgentGroupComponent,
        AgentListComponent,
        AgentComponent,
        GroupChatComponent,
        AgentMessageComponent,
        MessageListComponent,
        MessageInputComponent
    ]
})
export class AgentGroupModule { }