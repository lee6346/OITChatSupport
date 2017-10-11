import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './shared/core.module';
import { SharedModule } from './shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { liveRequestsReducer } from './store/reducer/live-request.reducer';
import { EffectsModule } from '@ngrx/effects';
//import { AgentsEffects } from './store/effects/agents.effects';
//import { DirectLineEffects } from './store/effects/direct-line.effects';
//import { GroupChatEffects } from './store/effects/group-chat.effects';
import { LiveRequestEffects } from './store/effects/live-request.effects';

import { HomeModule } from './home/home.module';
import { AgentPortalComponent } from './agent-portal.component';
import { AgentPortalRoutingModule } from './agent-portal.routing.module';

@NgModule({
    bootstrap: [AgentPortalComponent],
    declarations: [AgentPortalComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        SharedModule,
        CoreModule,
        StoreModule.forRoot(liveRequestsReducer),
        EffectsModule.forRoot([ LiveRequestEffects]),
        HomeModule,
        AgentPortalRoutingModule
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl },
    ],
})
export class AgentPortalModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}