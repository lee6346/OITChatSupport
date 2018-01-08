import { NgModule } from '@angular/core';
import { SharedModule} from '../shared/shared.module';
import { LiveSupportModule } from '../livesupport/live-support.module';
import { OitAgentsModule } from '../oit-agents/oit-agents.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        SharedModule,
        LiveSupportModule,
        OitAgentsModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }