var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
var ChatMessageListComponent = (function () {
    function ChatMessageListComponent() {
    }
    ChatMessageListComponent.prototype.ngOnInit = function () {
        this.scrollToBottom();
    };
    ChatMessageListComponent.prototype.onNewMessageReceived = function () {
        this.scrollToBottom();
    };
    ChatMessageListComponent.prototype.scrollToBottom = function () {
        this.chatScrollContainer.nativeElement.scrollTop =
            this.chatScrollContainer.nativeElement.scrollHeight;
    };
    ChatMessageListComponent.prototype.scrollToTop = function () {
        this.chatScrollContainer.nativeElement.scrollTop = 0;
    };
    ChatMessageListComponent.prototype.textAligner = function (sender) {
        if (sender.toLowerCase() === 'student') {
            return {
                'align-window-left': true,
            };
        }
        else
            return {
                'align-window-right': true,
            };
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], ChatMessageListComponent.prototype, "chatMessages", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ChatMessageListComponent.prototype, "textFilter", void 0);
    __decorate([
        ViewChild('scrollContainer'),
        __metadata("design:type", ElementRef)
    ], ChatMessageListComponent.prototype, "chatScrollContainer", void 0);
    ChatMessageListComponent = __decorate([
        Component({
            selector: 'chat-message-list',
            templateUrl: './chat-message-list.component.html',
            styleUrls: ['./chat-message-list.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ChatMessageListComponent);
    return ChatMessageListComponent;
}());
export { ChatMessageListComponent };
//# sourceMappingURL=chat-message-list.component.js.map