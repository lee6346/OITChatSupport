import { NgModule } from '@angular/core';

import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared';
import { HomeModule } from './home/home.module';
import { ChatbotRoutingModule } from './chatbot-routing.module';
//import { ChatbotConfigModule } from './chatbot-config.module';

import { ChatbotComponent } from './chatbot.component';


@NgModule({
    declarations: [
        ChatbotComponent,
    ],
    imports: [
        SharedModule,
        HttpModule,
        JsonpModule,
        HomeModule,
        //ChatbotConfigModule,
        ChatbotRoutingModule
    ]
})
export class ChatbotModuleShared {
}