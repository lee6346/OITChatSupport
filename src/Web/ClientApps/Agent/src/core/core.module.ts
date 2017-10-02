import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    ErrorHandlerService,
    LocalStorageService,
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
        ErrorHandlerService,
        LocalStorageService,
        DirectLineService,
        LiveRequestService,
        AgentMessageService,
        MessageTransferService
    ]
})
export class CoreModule { }
