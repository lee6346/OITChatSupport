import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AgentGroupComponent } from './agent-group.component';
import { AgentListComponent } from './components/agent-list/agent-list.component';
import { AgentComponent } from './components/agent/agent.component';

import { AgentGroupEffects } from './effects/agent-group.effects';
import { reducers } from './reducers/index';

@NgModule({
    imports: [
        SharedModule,
        StoreModule.forFeature('agentgroup', reducers),
        EffectsModule.forFeature([AgentGroupEffects]),
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