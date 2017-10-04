import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core';
import { AgentModuleShared } from './agent.shared.module';
import { SharedModule } from './shared/shared.module';


import { AgentComponent } from './agent.component';

@NgModule({
    bootstrap: [AgentComponent],
    imports: [
        BrowserModule,
        SharedModule,
        CoreModule,
        AgentModuleShared
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl },
    ],
})
export class AgentModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}