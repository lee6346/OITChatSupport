import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ChatBotComponent } from './chat-bot.component';
import { HeaderPanelComponent } from './components/header-panel/header-panel.component';
import { InputBarComponent } from './components/input-bar/input-bar.component';
import { TransferButtonComponent } from './components/transfer-button/transfer-button.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageComponent } from './components/message/message.component';

import { ChatBotEffects } from './store/chat-bot.effects';
import { reducers } from './store/index';

@NgModule({
    imports: [
        SharedModule,
        StoreModule.forFeature('chatbot', reducers),
        EffectsModule.forFeature([ChatBotEffects])
    ],
    declarations: [
        ChatBotComponent,
        HeaderPanelComponent,
        InputBarComponent,
        TransferButtonComponent,
        MessageListComponent,
        MessageComponent
    ],
    exports: [
        ChatBotComponent,
        HeaderPanelComponent,
        InputBarComponent,
        TransferButtonComponent,
        MessageListComponent,
        MessageComponent
    ]
})
export class ChatBotModule { }

