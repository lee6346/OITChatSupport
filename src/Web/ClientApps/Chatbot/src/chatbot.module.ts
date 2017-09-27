import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core';
import { ChatbotRoutingModule } from './chatbot-routing.module';
import { ChatbotConfigModule } from './chatbot-config.module';
import { ChatbotComponent } from './chatbot.component';

import { HomeModule } from './home/home.module';


@NgModule({
    bootstrap: [ChatbotComponent],
    declarations: [ChatbotComponent],
    imports: [
        BrowserModule,
        SharedModule,
        CoreModule,
        HomeModule,
        HttpModule,
        JsonpModule,
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