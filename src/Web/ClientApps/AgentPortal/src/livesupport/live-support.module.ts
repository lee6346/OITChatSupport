import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DirectLineService } from './services/directline.service';
import { LiveRequestService } from './services/live-request.service';
import { AppTimerService } from './services/app-timer.service';

import { AppTimerEffects } from './effects/app-timer.effects';
import { LiveRequestEffects } from './effects/live-request.effects';
import { ChatMessageEffects } from './effects/chat-message.effects';
import { ChatThreadEffects } from './effects/chat-thread.effects';

import { ChatMessagesContainer } from './containers/chat-messages/chat-messages.container';
import { ChatThreadsContainer } from './containers/chat-threads/chat-threads.container';
import { LiveRequestsContainer } from './containers/live-requests/live-requests.container';

import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatMessageListComponent } from './components/chat-message-list/chat-message-list.component';
import { ChatThreadComponent } from './components/chat-thread/chat-thread.component';
import { ChatThreadListComponent } from './components/chat-thread-list/chat-thread-list.component';
import { InputBarComponent } from './components/input-bar/input-bar.component';
import { PendingHeaderComponent } from './components/pending-header/pending-header.component';
import { PendingListComponent } from './components/pending-list/pending-list.component';
import { PendingRequestComponent } from './components/pending-request/pending-request.component';

import { reducers } from './reducers/index';

@NgModule({
    imports: [
        SharedModule,
        StoreModule.forFeature('livechatsupport', reducers),
        EffectsModule.forFeature([LiveRequestEffects, ChatMessageEffects, ChatThreadEffects, AppTimerEffects])
    ],
    declarations: [
        LiveRequestsContainer,
        PendingHeaderComponent,
        PendingListComponent,
        PendingRequestComponent,
        ChatThreadsContainer,
        ChatThreadListComponent,
        ChatThreadComponent,
        ChatMessagesContainer,
        ChatMessageListComponent,
        ChatMessageComponent,
        InputBarComponent,
    ],
    exports: [
        LiveRequestsContainer,
        PendingListComponent,
        PendingRequestComponent,
        ChatThreadsContainer,
        ChatThreadListComponent,
        ChatThreadComponent,
        ChatMessagesContainer,
        ChatMessageListComponent,
        ChatMessageComponent,
        InputBarComponent,
    ],
    providers: [
        DirectLineService,
        LiveRequestService,
        AppTimerService,
    ]
})
export class LiveSupportModule { }