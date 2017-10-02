import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AgentModuleShared } from './agent.shared.module';
import { AgentComponent } from './agent.component';

@NgModule({
    bootstrap: [AgentComponent],
    imports: [
        ServerModule,
        AgentModuleShared
    ]
})
export class AgentModule {
}