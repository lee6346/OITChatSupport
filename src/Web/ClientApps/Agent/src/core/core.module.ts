import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    DirectLineService,
    LiveRequestService,
    AgentMessageService,
    MessageTransferService
} from './';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    providers: [
        DirectLineService,
        LiveRequestService,
        AgentMessageService,
        MessageTransferService
    ]
})
export class CoreModule { }
