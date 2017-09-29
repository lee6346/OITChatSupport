import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ChatbotModuleShared } from './chatbot.shared.module';
import { ChatbotComponent } from './chatbot.component';

@NgModule({
    bootstrap: [ChatbotComponent],
    imports: [
        ServerModule,
        ChatbotModuleShared
    ]
})
export class ChatbotModule {
}