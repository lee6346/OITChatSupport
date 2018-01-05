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
import * as fromLiveSupport from '../reducers/index';
import { SendMessageActivityAction, FilterMessageTextAction } from '../actions/chat-message.actions';
var ChatMessagesContainer = (function () {
    function ChatMessagesContainer(store) {
        this.store = store;
        this.currentThreadMessages$ = store.select(fromLiveSupport.getMessageListBySelectedThread);
        this.textFilteredMessages$ = store.select(fromLiveSupport.getMessagesByTextQuery);
        this.textFilter$ = store.select(fromLiveSupport.getMessageFilterText);
    }
    ChatMessagesContainer.prototype.ngOnInit = function () {
        this.subscribeToCurrentThreadId();
    };
    ChatMessagesContainer.prototype.subscribeToCurrentThreadId = function () {
        var _this = this;
        this.store.select(fromLiveSupport.getSelectedThreadId)
            .subscribe(function (threadId) { return _this.currentThreadId = threadId; }, function (err) { return console.log('ChatMessageContainer: error reading current thread Id'); });
    };
    ChatMessagesContainer.prototype.onMessageSubmitted = function (message) {
        if (typeof this.currentThreadId !== 'undefined') {
            var payload = {
                senderId: 'jvr632',
                threadId: this.currentThreadId,
                text: message
            };
            this.store.dispatch(new SendMessageActivityAction(payload));
        }
    };
    ChatMessagesContainer.prototype.onTextFilter = function (text) {
        this.store.dispatch(new FilterMessageTextAction(text));
    };
    ChatMessagesContainer = __decorate([
        Component({
            selector: 'chat-messages',
            template: "\n        <chat-message-header></chat-message-header>\n        <div class=\"chat-display\">\n            <div class=\"chat-window\">\n                <chat-message-list \n                                   [chatMessages]=\"currentThreadMessages$ | async\"\n                                   [textFilter]=\"textFilter$ | async\"></chat-message-list>\n            </div>\n        </div>\n        <div class=\"chat-filter-bar\">\n            <chat-message-filter (textFilter)=\"onTextFilter($event)\"></chat-message-filter>\n        </div>\n        <div class=\"chat-input\">\n            <input-bar (messageSubmit)=\"onMessageSubmitted($event)\"></input-bar>\n        </div>\n    ",
            styles: ["\n        .chat-display {\n            height: 70%;\n        }\n        .chat-window {\n            height: 100%;\n            padding: 10px 10px 10px 10px;\n        }\n        .chat-filter-bar{\n            height: 5%;\n        }\n        .chat-input {\n            padding-top: 10px;\n            height: 25%;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [Store])
    ], ChatMessagesContainer);
    return ChatMessagesContainer;
}());
export { ChatMessagesContainer };
//# sourceMappingURL=chat-messages.container.js.map