import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ChatBotComponent } from './chat-bot.component';
import { ChatBotEffects } from '../store/chat-bot.effects';
import { reducers as chatBotReducer} from '../store/index';

@NgModule({
    imports: [
        SharedModule,
        StoreModule.forFeature('chatbot', chatBotReducer),
        EffectsModule.forFeature([ChatBotEffects])
    ],
    declarations: [
        ChatBotComponent,
    ],
    exports: [
        ChatBotComponent
    ]
})
export class ChatBotModule { }

