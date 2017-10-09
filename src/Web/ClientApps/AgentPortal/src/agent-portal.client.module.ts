import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgentPortalModuleShared } from './agent-portal.shared.module';
import { SharedModule } from './shared/shared.module';


import { AgentPortalComponent } from './agent-portal.component';

@NgModule({
    bootstrap: [AgentPortalComponent],
    imports: [
        BrowserModule,
        SharedModule,
        AgentPortalModuleShared
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