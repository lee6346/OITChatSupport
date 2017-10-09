import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AgentPortalModuleShared } from './agent-portal.shared.module';
import { AgentPortalComponent } from './agent-portal.component';

@NgModule({
    bootstrap: [AgentPortalComponent],
    imports: [
        ServerModule,
        AgentPortalModuleShared
    ]
})
export class AgentPortalModule {
}