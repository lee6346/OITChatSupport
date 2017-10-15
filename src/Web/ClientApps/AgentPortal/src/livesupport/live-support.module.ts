import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LiveSupportComponent } from './live-support.component';
import { CachedMessagesComponent } from './components/cachedmessages/cached-messages.component';
import { ChatDisplayComponent } from './components/chatdisplay/chat-display.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { InputBarComponent } from './components/inputbar/input-bar.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        LiveSupportComponent,
        CachedMessagesComponent,
        ChatDisplayComponent,
        ChatMessageComponent,
        InputBarComponent
    ],
    exports: [
        LiveSupportComponent,
        CachedMessagesComponent,
        ChatDisplayComponent,
        ChatMessageComponent,
        InputBarComponent
    ],

})
export class LiveSupportModule { }