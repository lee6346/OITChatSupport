import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ChatBotComponent } from './chat-bot.component';
import { ChatHeaderPanelComponent } from './components/chat-header-panel/chat-header-panel.component';
import { InputBarComponent } from './components/input-bar/input-bar.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageComponent } from './components/message/message.component';

import { DirectLineService } from './services/direct-line.service';
import { LiveRequestService } from './services/live-request.service';

import { DirectLineEffects } from './effects/directline.effects';
import { LiveRequestEffects } from './effects/live-request.effects';
import { reducers } from './store/index';

@NgModule({
    imports: [
        SharedModule,
        StoreModule.forFeature('chatbot', reducers),
        EffectsModule.forFeature([DirectLineEffects, LiveRequestEffects])
    ],
    declarations: [
        ChatBotComponent,
        ChatHeaderPanelComponent,
        InputBarComponent,
        MessageListComponent,
        MessageComponent
    ],
    exports: [
        ChatBotComponent,
        ChatHeaderPanelComponent,
        InputBarComponent,
        MessageListComponent,
        MessageComponent
    ],
    providers: [
        DirectLineService,
        LiveRequestService
    ]
})
export class ChatBotModule { }

