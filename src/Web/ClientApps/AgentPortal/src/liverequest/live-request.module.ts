import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { LiveRequestComponent } from './live-request.component';
import { PendingListComponent } from './pendinglist/pending-list.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        LiveRequestComponent,
        PendingListComponent
    ],
    exports: [
        LiveRequestComponent,
        PendingListComponent
    ],

})
export class LiveRequestModule { }