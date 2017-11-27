import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimeSpanPipe } from './pipes/time-span.pipe';
import { QueryHighlightPipe } from './pipes/query-highlight.pipe';
@NgModule({
    imports: [CommonModule],
    declarations: [TimeSpanPipe, QueryHighlightPipe],
    exports: [
        CommonModule,
        FormsModule,
        TimeSpanPipe,
        QueryHighlightPipe
    ]
})
export class SharedModule { }