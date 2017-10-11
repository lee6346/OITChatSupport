import { NgModule } from '@angular/core';
import { SharedModule} from '../shared/shared.module';
import { LiveRequestModule } from '../liverequest/live-request.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        SharedModule,
        LiveRequestModule,
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }