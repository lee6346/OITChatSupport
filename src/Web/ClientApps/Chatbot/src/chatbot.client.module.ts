import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ChatbotModuleShared } from './chatbot.shared.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core';

import { ChatbotComponent } from './chatbot.component';



@NgModule({
    bootstrap: [ChatbotComponent],
    imports: [
        BrowserModule,
        SharedModule,
        CoreModule,
        ChatbotModuleShared
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