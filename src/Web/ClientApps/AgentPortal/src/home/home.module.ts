import { NgModule } from '@angular/core';
import { SharedModule} from '../shared';
import { GroupChatModule } from '../groupchat/group-chat.module';
import { LiveRequestModule } from '../liverequest/live-request.module';
import { LiveSupportModule } from '../livesupport/live-support.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        SharedModule,
        GroupChatModule,
        LiveRequestModule,
        LiveSupportModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }