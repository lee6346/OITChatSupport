import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ChatBotModule } from '../chat-bot/chat-bot.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        SharedModule,
        ChatBotModule
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent,
    ]
})
export class HomeModule { }

