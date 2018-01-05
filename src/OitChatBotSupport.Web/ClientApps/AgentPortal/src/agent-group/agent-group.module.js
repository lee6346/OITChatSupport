var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AgentGroupComponent } from './containers/agent-group.component';
import { AgentListComponent } from './components/agent-list/agent-list.component';
import { AgentComponent } from './components/agent/agent.component';
import { AgentGroupEffects } from './effects/agent-group.effects';
import { reducers } from './reducers/index';
var AgentGroupModule = (function () {
    function AgentGroupModule() {
    }
    AgentGroupModule = __decorate([
        NgModule({
            imports: [
                SharedModule,
                StoreModule.forFeature('agentgroup', reducers),
                EffectsModule.forFeature([AgentGroupEffects]),
            ],
            declarations: [
                AgentGroupComponent,
                AgentListComponent,
                AgentComponent,
            ],
            exports: [
                AgentGroupComponent,
                AgentListComponent,
                AgentComponent,
            ]
        })
    ], AgentGroupModule);
    return AgentGroupModule;
}());
export { AgentGroupModule };
//# sourceMappingURL=agent-group.module.js.map