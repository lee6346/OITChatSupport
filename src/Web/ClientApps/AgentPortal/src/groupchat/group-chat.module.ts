import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { GroupChatComponent } from './group-chat.component';
import { AgentMessageComponent } from './components/agent-message/agent-message.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { MessageListComponent } from './components/message-list/message-list.component';
 
@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        GroupChatComponent,
        AgentMessageComponent,
        MessageListComponent,
        MessageInputComponent
    ],
    exports: [
        GroupChatComponent,
        AgentMessageComponent,
        MessageListComponent,
        MessageInputComponent
    ],
})
export class GroupChatModule { }