import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LiveRequestComponent } from './containers/live-request.component';

import { DirectLineThreadsComponent } from './containers/directline-threads.component';
import { DirectLineSessionComponent } from './containers/directline-session.component';

import { CachedMessagesComponent } from './components/cached-messages/cached-messages.component';
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
        SharedModule,
        StoreModule.forFeature('livechatsupport', reducers),
        EffectsModule.forFeature([LiveRequestEffects, DirectLineThreadEffects, DirectLineMessageEffects])
    ],
    declarations: [
        DirectLineThreadsComponent,
        DirectLineSessionComponent,
        LiveRequestComponent,
        PendingListComponent,
        PendingRequestComponent,
        ChatMessageListComponent,
        ChatMessageComponent,
        ChatThreadListComponent,
        ChatThreadComponent,
        CachedMessagesComponent,
        InputBarComponent,
    ],
    exports: [
        DirectLineThreadsComponent,
        DirectLineSessionComponent,
        LiveRequestComponent,
        PendingListComponent,
        PendingRequestComponent,
        ChatMessageListComponent,
        ChatMessageComponent,
        ChatThreadListComponent,
        ChatThreadComponent,
        CachedMessagesComponent,
        InputBarComponent,
    ],
    providers: [
        DirectLineService
    ]

})
export class LiveSupportModule { }