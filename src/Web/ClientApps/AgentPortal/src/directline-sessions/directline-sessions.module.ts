import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DirectLineSessionsComponent } from './directline-sessions.component';
import { SessionListComponent } from './components/session-list/session-list.component';
import { SessionComponent } from './components/session/session.component';

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        DirectLineSessionsComponent,
        SessionListComponent,
        SessionComponent
    ],
    exports: [
        DirectLineSessionsComponent,
        SessionListComponent,
        SessionComponent
    ]
})
export class DirectLineSessionsModule { }