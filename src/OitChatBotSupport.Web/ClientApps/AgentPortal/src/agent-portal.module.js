var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './shared/index';
import { EffectsModule } from '@ngrx/effects';
import { HomeModule } from './home/home.module';
import { AgentPortalComponent } from './agent-portal.component';
import { AgentPortalRoutingModule } from './agent-portal.routing.module';
var AgentPortalModule = (function () {
    function AgentPortalModule() {
    }
    AgentPortalModule = __decorate([
        NgModule({
            bootstrap: [AgentPortalComponent],
            declarations: [AgentPortalComponent],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                HttpClientModule,
                SharedModule,
                CoreModule,
                StoreModule.forRoot(reducers, { metaReducers: metaReducers }),
                EffectsModule.forRoot([]),
                HomeModule,
                AgentPortalRoutingModule
            ],
            providers: [
                { provide: 'BASE_URL', useFactory: getBaseUrl },
            ],
        })
    ], AgentPortalModule);
    return AgentPortalModule;
}());
export { AgentPortalModule };
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
//# sourceMappingURL=agent-portal.module.js.map