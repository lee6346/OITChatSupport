import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChatModule } from '../chat/chat.module';

@NgModule({
    imports: [
        SharedModule,
        ChatModule
    ],
    declarations: [

    ],
})
export class HomeModule { }

