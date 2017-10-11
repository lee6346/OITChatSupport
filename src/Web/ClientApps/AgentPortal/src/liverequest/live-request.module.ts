import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LiveRequestComponent } from './live-request.component';
import { PendingListComponent } from './components/pending-list/pending-list.component';
import { PendingRequestComponent } from './components/pending-request/pending-request.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        LiveRequestComponent,
        PendingListComponent,
        PendingRequestComponent
    ],
    exports: [
        LiveRequestComponent,
        PendingListComponent,
        PendingRequestComponent
    ],

})
export class LiveRequestModule { }