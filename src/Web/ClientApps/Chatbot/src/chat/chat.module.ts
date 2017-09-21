import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ChatDisplayComponent } from './components/chat-display.component';
import { DirectLineService } from './services/direct-line.service';
import { LiveRequestService } from './services/live-request.service';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        ChatDisplayComponent
    ],
    providers: [
        DirectLineService,
        LiveRequestService
    ]
})
export class ChatModule { }

