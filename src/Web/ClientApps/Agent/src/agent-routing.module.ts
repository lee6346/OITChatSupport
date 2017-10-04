import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from './agent.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: 'agent/home', component: HomeComponent },
    { path: '', redirectTo: '/agent/home', pathMatch: 'full' },

    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AgentRoutingModule { }