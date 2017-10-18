import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LiveRequestComponent } from './live-request.component';
import { PendingListComponent } from './components/pending-list/pending-list.component';
import { PendingRequestComponent } from './components/pending-request/pending-request.component';

import { LiveRequestEffects } from './effects/live-request.effects';
import { reducers } from './reducers/index';

@NgModule({
    imports: [
        SharedModule,
        StoreModule.forFeature('liverequests', reducers),
        EffectsModule.forFeature([LiveRequestEffects]),
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