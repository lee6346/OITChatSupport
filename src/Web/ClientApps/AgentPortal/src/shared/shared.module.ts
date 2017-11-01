import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimeSpanPipe } from './pipes/time-span.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [TimeSpanPipe],
    exports: [
        CommonModule,
        FormsModule,
        TimeSpanPipe
    ]
})
export class SharedModule { }