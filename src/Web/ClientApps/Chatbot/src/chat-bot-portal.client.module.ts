import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {reducers, metaReducers } from './shared/index.reducer';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ChatBotRoutingModule } from './chat-bot-routing.module';
import { ChatBotPortalComponent } from './chat-bot-portal.component';


@NgModule({
    bootstrap: [ChatBotPortalComponent],
    declarations: [
        ChatBotPortalComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        SharedModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        EffectsModule.forRoot([]),
        HomeModule,
        ChatBotRoutingModule
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class ChatBotPortalModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}