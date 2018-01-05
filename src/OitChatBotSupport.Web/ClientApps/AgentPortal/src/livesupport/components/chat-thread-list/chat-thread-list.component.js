var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ChatThreadComponent } from '../chat-thread/chat-thread.component';
var ChatThreadListComponent = (function () {
    function ChatThreadListComponent() {
        this.switchThread = new EventEmitter();
        this.removeThread = new EventEmitter();
    }
    ChatThreadListComponent.prototype.onThreadSwitched = function (threadId) {
        this.switchThread.emit(threadId);
    };
    ChatThreadListComponent.prototype.onThreadRemoved = function (threadId) {
        this.removeThread.emit(threadId);
    };
    __decorate([
        ViewChild(ChatThreadComponent),
        __metadata("design:type", ChatThreadComponent)
    ], ChatThreadListComponent.prototype, "threadComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], ChatThreadListComponent.prototype, "threads", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ChatThreadListComponent.prototype, "selectedThreadId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ChatThreadListComponent.prototype, "timer", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ChatThreadListComponent.prototype, "switchThread", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ChatThreadListComponent.prototype, "removeThread", void 0);
    ChatThreadListComponent = __decorate([
        Component({
            selector: 'chat-thread-list',
            templateUrl: './chat-thread-list.component.html',
            styleUrls: ['./chat-thread-list.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ChatThreadListComponent);
    return ChatThreadListComponent;
}());
export { ChatThreadListComponent };
//# sourceMappingURL=chat-thread-list.component.js.map