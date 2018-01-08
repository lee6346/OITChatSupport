import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentHubGateway } from './agent.hub.gateway';


@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    providers: [
        AgentHubGateway
    ]
})
export class CoreModule { }