import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { LiveSupportComponent } from './live-support.component';

import { ChatDisplayComponent } from './chatdisplay/chat-display.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        LiveSupportComponent,
        ChatDisplayComponent
    ],
    entryComponents: [
        ChatDisplayComponent
    ],
    exports: [
        LiveSupportComponent,
        ChatDisplayComponent
    ],

})
export class LiveSupportModule { }