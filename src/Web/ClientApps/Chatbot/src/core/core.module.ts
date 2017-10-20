import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectLineService } from './direct-line.service';
import { LiveRequestService } from './live-request.service';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    providers: [
        DirectLineService,
        LiveRequestService
    ]
})
export class CoreModule { }
