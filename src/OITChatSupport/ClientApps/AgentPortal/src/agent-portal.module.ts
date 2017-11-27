import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers} from './shared/index';
import { EffectsModule } from '@ngrx/effects';
import { HomeModule } from './home/home.module';
import { AgentPortalComponent } from './agent-portal.component';
import { AgentPortalRoutingModule } from './agent-portal.routing.module';

@NgModule({
    bootstrap: [AgentPortalComponent],
    declarations: [AgentPortalComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        CoreModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        HomeModule,
        AgentPortalRoutingModule
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl },
    ],
})
export class AgentPortalModule {}
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}