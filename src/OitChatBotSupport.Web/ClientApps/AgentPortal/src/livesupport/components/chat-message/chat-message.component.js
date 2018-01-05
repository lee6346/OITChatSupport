var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
var ChatMessageComponent = (function () {
    function ChatMessageComponent() {
        this.textFilter = '';
        this.newMessageReceived = new EventEmitter();
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
        this.newMessageReceived.emit();
    };
    ChatMessageComponent.prototype.labelProperties = function (sender) {
        if (sender === 'student')
            return { 'label-remote': true };
        else
            return { 'label-host': true };
    };
    ChatMessageComponent.prototype.bubbleProperties = function (sender) {
        if (sender.toLowerCase() === 'student') {
            return {
                'remote-bubble': true
            };
        }
        else {
            return {
                'host-bubble': true
            };
        }
    };
    ChatMessageComponent.prototype.alignWrapperProperties = function (sender) {
        if (sender.toLowerCase() === 'student')
            return { 'align-wrapper-left': true };
        else
            return { 'align-wrapper-right': true };
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ChatMessageComponent.prototype, "chatMessage", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ChatMessageComponent.prototype, "textFilter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ChatMessageComponent.prototype, "messageContinuation", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ChatMessageComponent.prototype, "newMessageReceived", void 0);
    ChatMessageComponent = __decorate([
        Component({
            selector: 'chat-message',
            templateUrl: './chat-message.component.html',
            styleUrls: ['./chat-message.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ChatMessageComponent);
    return ChatMessageComponent;
}());
export { ChatMessageComponent };
//# sourceMappingURL=chat-message.component.js.map