
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from './agent.component';

export const routes: Routes = [
    { path: 'agent', component: AgentComponent },
    { path: '', redirectTo: '/agent', pathMatch: 'full' },

    { path: '**', component: AgentComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AgentRoutingModule { }