var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromChatBot from './store/index';
import { RetrieveConnectionTokenAction } from './actions/directline-connection.actions';
import { SendMessageActivityAction } from './actions/directline-activity.actions';
import { RequestAgentTransferAction, CancelAgentTransferAction } from './actions/agent-transfer.actions';
var ChatSessionComponent = (function () {
    function ChatSessionComponent(store) {
        this.store = store;
        this.requestPending = false;
        this.messageActivities$ = store.select(fromChatBot.getMessages);
        this.disconnectActivity$ = store.select(fromChatBot.getDisconnectActivity);
    }
    ChatSessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new RetrieveConnectionTokenAction());
        this.store.select(fromChatBot.getChatStatusEntity).subscribe(function (status) {
            _this.currentThreadId = status.threadId;
            _this.connected = status.connected;
            _this.requestPending = status.requestPending;
            console.log('pending status: ' + _this.requestPending);
        });
        this.store.select(fromChatBot.getLastStudentMessage).subscribe(function (msg) { return _this.lastStudentMessage = msg; });
    };
    ChatSessionComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new CancelAgentTransferAction({
            conversationId: this.currentThreadId
        }));
    };
    ChatSessionComponent.prototype.onMessageSubmitted = function (message) {
        if (message !== '' && this.currentThreadId !== '') {
            this.store.dispatch(new SendMessageActivityAction({
                text: message,
                conversationId: this.currentThreadId
            }));
        }
    };
    ChatSessionComponent.prototype.onTransferRequest = function () {
        if (!this.requestPending) {
            this.store.dispatch(new RequestAgentTransferAction({
                botHandle: 'AskRowdy',
                conversationId: this.currentThreadId,
                lastMessage: this.lastStudentMessage
            }));
        }
    };
    ChatSessionComponent = __decorate([
        Component({
            selector: 'chat-session',
            template: "\n    <div class=\"container-fluid\">\n        <div class=\"chat-window row\">\n                <chat-header-panel (transferRequest)=\"onTransferRequest()\"></chat-header-panel>\n                <message-list [messageActivities]=\" messageActivities$ | async \"></message-list>\n                <input-bar (messageSubmit)=\"onMessageSubmitted($event)\"></input-bar>\n        </div>\n    </div>",
            styles: ["\n    .chat-window {\n        min-width: 100%;\n        min-height: 100%;\n        background-color: #c7bebe;\n    }\n    .container-fluid{\n        padding: 0;\n    }\n    "
            ]
        }),
        __metadata("design:paramtypes", [Store])
    ], ChatSessionComponent);
    return ChatSessionComponent;
}());
export { ChatSessionComponent };
//# sourceMappingURL=chat-session.component.js.map