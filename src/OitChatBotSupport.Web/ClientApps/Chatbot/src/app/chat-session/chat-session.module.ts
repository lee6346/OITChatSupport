import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ChatSessionComponent } from './chat-session.component';
import { ChatHeaderPanelComponent } from './components/chat-header-panel/chat-header-panel.component';
import { InputBarComponent } from './components/input-bar/input-bar.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageComponent } from './components/message/message.component';
import { DirectLineService } from './services/direct-line.service';
import { AgentTransferService } from './services/agent-transfer.service';
import { DirectLineEffects } from './effects/directline.effects';
import { AgentTransferEffects } from './effects/agent-transfer.effects';
import { reducers } from './store/index';


/**
 * This module contains all necessary components to render the chat window,

 * services to make API requests to retrieve tokens and chat with the bot
 */
@NgModule({
    imports: [
        SharedModule,
        StoreModule.forFeature('chatbot', reducers),
        EffectsModule.forFeature([DirectLineEffects, AgentTransferEffects])
    ],
    declarations: [
        ChatSessionComponent,
        ChatHeaderPanelComponent,
        InputBarComponent,
        MessageListComponent,
        MessageComponent
    ],
    exports: [
        ChatSessionComponent,
        ChatHeaderPanelComponent,
        InputBarComponent,
        MessageListComponent,
        MessageComponent
    ],
    providers: [
        DirectLineService,
        AgentTransferService
    ]
})
export class ChatSessionModule { }

