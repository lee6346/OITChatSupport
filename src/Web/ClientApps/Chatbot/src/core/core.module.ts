import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlerService, LocalStorageService, DirectLineService, LiveRequestService } from './';
@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    providers: [
        ErrorHandlerService,
        LocalStorageService,
        DirectLineService,
        LiveRequestService
    ]
})
export class CoreModule { }
