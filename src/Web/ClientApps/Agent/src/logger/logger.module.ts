import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { LoggerDisplayComponent, InsertLoggerMessageDirective} from './';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        LoggerDisplayComponent,
        InsertLoggerMessageDirective
    ],
    exports: [
        LoggerDisplayComponent,
        InsertLoggerMessageDirective
    ]
})
export class LoggerModule{}