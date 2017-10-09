import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import {
    AgentGroupComponent,
    GroupChatComponent,
    GroupChatDisplayComponent,
    GroupChatInputComponent
 } from './';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        AgentGroupComponent,
        GroupChatComponent,
        GroupChatDisplayComponent,
        GroupChatInputComponent
    ],
    exports: [
        AgentGroupComponent,
        GroupChatComponent,
        GroupChatDisplayComponent,
        GroupChatInputComponent
    ],

})
export class GroupChatModule { }