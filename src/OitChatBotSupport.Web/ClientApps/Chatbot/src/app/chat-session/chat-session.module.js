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
import { ChatSessionComponent } from './chat-session.component';
import { ChatHeaderPanelComponent } from './components/chat-header-panel/chat-header-panel.component';
import { InputBarComponent } from './components/input-bar/input-bar.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageComponent } from './components/message/message.component';
import { DirectLineService } from './services/direct-line.service';
import { AgentTransferService } from './services/agent-transfer.service';
import { DirectLineEffects } from './effects/directline.effects';
import { AgentTransferEffects } from './effects/agent-transfer.effects';
import { reducers } from './store/index';
var ChatSessionModule = (function () {
    function ChatSessionModule() {
    }
    ChatSessionModule = __decorate([
        NgModule({
            imports: [
                SharedModule,
                StoreModule.forFeature('chatbot', reducers),
                EffectsModule.forFeature([DirectLineEffects, AgentTransferEffects])
            ],
            declarations: [
                ChatSessionComponent,
                ChatHeaderPanelComponent,
                InputBarComponent,
                MessageListComponent,
                MessageComponent
            ],
            exports: [
                ChatSessionComponent,
                ChatHeaderPanelComponent,
                InputBarComponent,
                MessageListComponent,
                MessageComponent
            ],
            providers: [
                DirectLineService,
                AgentTransferService
            ]
        })
    ], ChatSessionModule);
    return ChatSessionModule;
}());
export { ChatSessionModule };
//# sourceMappingURL=chat-session.module.js.map