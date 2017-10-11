import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: 'agent', component: HomeComponent },
    { path: '', redirectTo: '/agent', pathMatch: 'full' },

    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AgentPortalRoutingModule { }