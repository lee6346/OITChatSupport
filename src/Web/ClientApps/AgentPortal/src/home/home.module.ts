import { NgModule } from '@angular/core';
import { SharedModule} from '../shared/shared.module';
import { LiveRequestModule } from '../liverequest/live-request.module';
import { AgentGroupModule } from '../agent-group/agent-group.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        SharedModule,
        LiveRequestModule,
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