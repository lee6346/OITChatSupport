import { NgModule } from '@angular/core';
import { SharedModule} from '../shared/shared.module';
//import { LiveRequestModule } from '../liverequest/live-request.module';
import { LiveSupportModule } from '../livesupport/live-support.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        SharedModule,
        LiveSupportModule
        //LiveRequestModule,
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }