import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ChatBotModule } from '../chat-bot/chat-bot.module';
import { HomeComponent } from './home.component';


/**
 * Home module used to hold home component with the chat window and a generic button to launch it
 *
 * Note: this module should be removed later when using the UTSA web page to launch it 
 */
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

