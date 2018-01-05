var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAgentGroup from '../reducers/index';
import * as agentGroup from '../actions/agent-group.actions';
var AgentGroupComponent = (function () {
    function AgentGroupComponent(store) {
        this.store = store;
        this.agentGroup$ = store.select(fromAgentGroup.getGroupMembers).map(function (item) { return item.toArray(); });
    }
    AgentGroupComponent.prototype.ngOnInit = function () {
        console.log('retrieving agents');
        this.store.dispatch(new agentGroup.LoadAgentsAction('AskRowdy'));
    };
    AgentGroupComponent = __decorate([
        Component({
            selector: 'agent-group',
            templateUrl: './agent-group.component.html',
            styleUrls: ['./agent-group.component.css']
        }),
        __metadata("design:paramtypes", [Store])
    ], AgentGroupComponent);
    return AgentGroupComponent;
}());
export { AgentGroupComponent };
//# sourceMappingURL=agent-group.component.js.map