import { NgModule } from '@angular/core';
import { SharedModule} from '../shared/shared.module';
import { LiveSupportModule } from '../livesupport/live-support.module';
import { AgentGroupModule } from '../agent-group/agent-group.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        SharedModule,
        LiveSupportModule,
        AgentGroupModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }