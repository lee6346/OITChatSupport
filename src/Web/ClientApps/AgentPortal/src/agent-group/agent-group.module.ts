import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AgentGroupComponent } from './agent-group.component';
import { AgentListComponent } from './components/agent-list/agent-list.component';
import { AgentComponent } from './components/agent/agent.component';

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        AgentGroupComponent,
        AgentListComponent,
        AgentComponent
    ],
    exports: [
        AgentGroupComponent,
        AgentListComponent,
        AgentComponent
    ]
})
export class AgentGroupModule { }