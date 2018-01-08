import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AgentGroupComponent } from './containers/agent-group.component';
import { AgentListComponent } from './components/agent-list/agent-list.component';
import { AgentComponent } from './components/agent/agent.component';
import { AgentGroupEffects } from './effects/agent-group.effects';
import { AgentGroupService } from './services/agent-group.service';
import { reducers } from './store/index';


@NgModule({
    imports: [
        SharedModule,
        StoreModule.forFeature('oitagents', reducers),
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
    ],
    providers: [
        AgentGroupService
    ]
})
export class OitAgentsModule { }