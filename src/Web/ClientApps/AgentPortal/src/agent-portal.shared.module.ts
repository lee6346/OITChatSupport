import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared';
import { HomeModule } from './home/home.module';
import { AgentPortalRoutingModule } from './agent-portal.routing.module';

import { AgentPortalComponent } from './agent-portal.component';


@NgModule({
    declarations: [
        AgentPortalComponent,
    ],
    imports: [
        SharedModule,
        HomeModule,
        HttpClientModule,
        AgentPortalRoutingModule
    ]
})
export class AgentPortalModuleShared {
}