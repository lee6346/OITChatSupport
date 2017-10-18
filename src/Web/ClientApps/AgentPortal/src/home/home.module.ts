import { NgModule } from '@angular/core';
import { SharedModule} from '../shared/shared.module';
import { LiveRequestModule } from '../liverequest/live-request.module';
import { AgentGroupModule } from '../agent-group/agent-group.module';
//import { DirectLineSessionsModule } from '../directline-sessions/directline-sessions.module';
//import { LiveSupportModule } from '../livesupport/live-support.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        SharedModule,
        LiveRequestModule,
        //LiveSupportModule,
        AgentGroupModule,
        //DirectLineSessionsModule   
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }