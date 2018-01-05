var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
export var routes = [
    { path: 'agent', component: HomeComponent },
    { path: '', redirectTo: '/agent', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];
var AgentPortalRoutingModule = (function () {
    function AgentPortalRoutingModule() {
    }
    AgentPortalRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes)
            ],
            exports: [RouterModule]
        })
    ], AgentPortalRoutingModule);
    return AgentPortalRoutingModule;
}());
export { AgentPortalRoutingModule };
//# sourceMappingURL=agent-portal.routing.module.js.map