var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
var ChatThreadComponent = (function () {
    function ChatThreadComponent() {
        this.currentToggleState = 'inactive';
        this._chatDuration = 0;
        this.switchThread = new EventEmitter();
        this.removeThread = new EventEmitter();
    }
    Object.defineProperty(ChatThreadComponent.prototype, "chatDuration", {
        set: function (chatDuration) {
            this._chatDuration += 1000;
        },
        enumerable: true,
        configurable: true
    });
    ChatThreadComponent.prototype.onThreadClicked = function () {
        this.switchThread.emit(this.thread.threadId);
    };
    ChatThreadComponent.prototype.onRemoveClicked = function () {
        this.removeThread.emit(this.thread.threadId);
    };
    ChatThreadComponent.prototype.threadStatusSelector = function () {
        if (this.thread.active)
            return { 'active-badge': true };
        else
            return { 'inactive-badge': true };
    };
    ChatThreadComponent.prototype.currentSelectContainer = function () {
        if (this.isSelectedId)
            return { 'selected-thread-container': true };
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ChatThreadComponent.prototype, "thread", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ChatThreadComponent.prototype, "isSelectedId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ChatThreadComponent.prototype, "chatDuration", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ChatThreadComponent.prototype, "switchThread", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ChatThreadComponent.prototype, "removeThread", void 0);
    ChatThreadComponent = __decorate([
        Component({
            selector: 'chat-thread',
            templateUrl: './chat-thread.component.html',
            styleUrls: ['./chat-thread.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ChatThreadComponent);
    return ChatThreadComponent;
}());
export { ChatThreadComponent };
//# sourceMappingURL=chat-thread.component.js.map