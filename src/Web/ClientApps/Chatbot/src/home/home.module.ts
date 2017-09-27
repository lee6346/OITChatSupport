import { NgModule } from '@angular/core';
//import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { ChatComponent } from './chatcomponent/chat.component';

import { DirectLineService } from './services/direct-line.service';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
    ],
    declarations: [
        HomeComponent,
        ChatComponent,
    ],
    exports: [
        HomeComponent,
        ChatComponent
    ],
    providers: [
        DirectLineService
    ]
})
export class HomeModule { }

