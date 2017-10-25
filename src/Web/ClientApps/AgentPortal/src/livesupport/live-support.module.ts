import { NgModule } from '@angular/core';
import { SharedModule as Shared } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LiveRequestComponent } from './containers/live-request.component';
import { AccordionModule, ButtonModule, SharedModule } from 'primeng/primeng';
import { DirectLineThreadsComponent } from './containers/directline-threads.component';
import { DirectLineSessionComponent } from './containers/directline-session.component';
import { CachedMessageComponent } from './components/cached-message/cached-message.component';
import { CachedMessageListComponent } from './components/cached-message-list/cached-message-list.component';
import { ChatMessageListComponent } from './components/chat-message-list/chat-message-list.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatThreadListComponent } from './components/chat-thread-list/chat-thread-list.component';
import { ChatThreadComponent } from './components/chat-thread/chat-thread.component';

import { PendingListComponent } from './components/pending-list/pending-list.component';
import { PendingRequestComponent } from './components/pending-request/pending-request.component';
import { InputBarComponent } from './components/input-bar/input-bar.component';
import { DirectLineService } from './services/direct-line.service';
import { LiveRequestEffects } from './effects/live-request.effects';
import { DirectLineThreadEffects } from './effects/directline-thread.effects';
import { DirectLineMessageEffects } from './effects/directline-message.effects';
import { reducers } from './reducers/index';

@NgModule({
    imports: [
        Shared,
        AccordionModule,
        ButtonModule,
        SharedModule,
        StoreModule.forFeature('livechatsupport', reducers),
        EffectsModule.forFeature([LiveRequestEffects, DirectLineThreadEffects, DirectLineMessageEffects])
    ],
    declarations: [
        LiveRequestComponent,
        PendingListComponent,
        PendingRequestComponent,
        
        DirectLineThreadsComponent,
        ChatThreadListComponent,
        ChatThreadComponent,

        /*
        DirectLineSessionComponent,
        ChatMessageListComponent,
        ChatMessageComponent,
        CachedMessageListComponent,
        CachedMessageComponent,
        InputBarComponent,*/
    ],
    exports: [
        LiveRequestComponent,
        PendingListComponent,
        PendingRequestComponent,
        
        DirectLineThreadsComponent,
        ChatThreadListComponent,
        ChatThreadComponent,
        /*
        DirectLineSessionComponent,
        ChatMessageListComponent,
        ChatMessageComponent,
        
        CachedMessageListComponent,
        CachedMessageComponent,
        InputBarComponent,*/
    ],
    providers: [
        DirectLineService
    ]

})
export class LiveSupportModule { }