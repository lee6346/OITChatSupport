import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { GroupChatComponent } from './group-chat.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        GroupChatComponent
    ],
    exports: [
        GroupChatComponent
    ],

})
export class GroupChatModule { }