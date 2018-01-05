var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { ChatMessagesContainer } from './containers/chat-messages.container';
import { ChatThreadsContainer } from './containers/chat-threads.container';
import { LiveRequestsContainer } from './containers/live-requests.container';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatMessageListComponent } from './components/chat-message-list/chat-message-list.component';
import { ChatMessageHeaderComponent } from './components/chat-message-header/chat-message-header.component';
import { ChatMessageFilterComponent } from './components/chat-message-filter/chat-message-filter.component';
import { ChatThreadsHeaderComponent } from './components/chat-threads-header/chat-threads-header.component';
import { ChatThreadComponent } from './components/chat-thread/chat-thread.component';
import { ChatThreadListComponent } from './components/chat-thread-list/chat-thread-list.component';
import { InputBarComponent } from './components/input-bar/input-bar.component';
import { PendingHeaderComponent } from './components/pending-header/pending-header.component';
import { PendingListComponent } from './components/pending-list/pending-list.component';
import { PendingRequestComponent } from './components/pending-request/pending-request.component';
import { reducers } from './reducers/index';
var LiveSupportModule = (function () {
    function LiveSupportModule() {
    }
    LiveSupportModule = __decorate([
        NgModule({
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
                ChatThreadsHeaderComponent,
                ChatThreadsContainer,
                ChatThreadListComponent,
                ChatThreadComponent,
                ChatMessagesContainer,
                ChatMessageHeaderComponent,
                ChatMessageFilterComponent,
                ChatMessageListComponent,
                ChatMessageComponent,
                InputBarComponent,
            ],
            exports: [
                LiveRequestsContainer,
                PendingListComponent,
                PendingRequestComponent,
                ChatThreadsContainer,
                ChatThreadsHeaderComponent,
                ChatThreadListComponent,
                ChatThreadComponent,
                ChatMessagesContainer,
                ChatMessageHeaderComponent,
                ChatMessageFilterComponent,
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
    ], LiveSupportModule);
    return LiveSupportModule;
}());
export { LiveSupportModule };
//# sourceMappingURL=live-support.module.js.map