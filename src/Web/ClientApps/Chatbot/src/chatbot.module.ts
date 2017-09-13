import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ChatbotRoutingModule } from './chatbot-routing.module';
import { ChatbotConfigModule } from './chatbot-config.module';
import { ChatbotComponent } from './chatbot.component';


@NgModule({
    bootstrap: [ChatbotComponent],
    declarations: [ChatbotComponent],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        ChatbotConfigModule,
        ChatbotRoutingModule
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class ChatbotModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}