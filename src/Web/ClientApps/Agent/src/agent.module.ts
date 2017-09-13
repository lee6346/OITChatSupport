import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';


@NgModule({
    bootstrap: [AgentComponent],
    declarations: [AgentComponent],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        AgentRoutingModule
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class AgentModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}