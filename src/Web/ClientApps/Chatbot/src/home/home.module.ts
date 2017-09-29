import { NgModule } from '@angular/core';
//import { SharedModule } from '../shared/shared.module';
import { SharedModule } from '../shared';
import { HomeComponent } from './home.component';
import { ChatComponent } from './chatcomponent/chat.component';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        HomeComponent,
        ChatComponent,
    ],
    exports: [
        HomeComponent,
        ChatComponent
    ]
})
export class HomeModule { }

