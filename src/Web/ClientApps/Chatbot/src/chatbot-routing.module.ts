import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatbotComponent } from './chatbot.component';

export const routes: Routes = [
    { path: 'chatbot', component: ChatbotComponent },
    { path: '', redirectTo: '/chatbot', pathMatch: 'full' },

    { path: '**', component: ChatbotComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class ChatbotRoutingModule { }