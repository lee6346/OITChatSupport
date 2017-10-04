import { NgModule } from '@angular/core';

import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared';
//import { LiveSupportModule } from './livesupport/live-support.module';
import { HomeModule } from './home/home.module';
import { AgentRoutingModule } from './agent-routing.module';

import { AgentComponent } from './agent.component';


@NgModule({
    declarations: [
        AgentComponent,
    ],
    imports: [
        SharedModule,
        HomeModule,
        HttpClientModule,
        HttpModule,
        JsonpModule,
        AgentRoutingModule
    ]
})
export class AgentModuleShared {
}