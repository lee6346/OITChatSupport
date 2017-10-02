import { NgModule } from '@angular/core';

import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared';
import { LiveSupportModule } from './livesupport/live-support.module';
import { AgentRoutingModule } from './agent-routing.module';

import { AgentComponent } from './agent.component';


@NgModule({
    declarations: [
        AgentComponent,
    ],
    imports: [
        SharedModule,
        HttpModule,
        JsonpModule,
        LiveSupportModule,
        AgentRoutingModule
    ]
})
export class AgentModuleShared {
}