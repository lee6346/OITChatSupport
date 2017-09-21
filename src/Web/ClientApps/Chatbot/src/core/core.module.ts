import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlerService, LocalStorageService } from './';
@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    providers: [
        ErrorHandlerService,
        LocalStorageService,
    ]
})
export class CoreModule { }
