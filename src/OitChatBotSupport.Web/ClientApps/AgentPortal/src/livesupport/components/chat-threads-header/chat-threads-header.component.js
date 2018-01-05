var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var ChatThreadsHeaderComponent = (function () {
    function ChatThreadsHeaderComponent() {
        this.collapse = 'active';
        this.expand = 'inactive';
    }
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ChatThreadsHeaderComponent.prototype, "currentThreadCount", void 0);
    ChatThreadsHeaderComponent = __decorate([
        Component({
            selector: 'chat-threads-header',
            templateUrl: './chat-threads-header.component.html',
            styleUrls: ['./chat-threads-header.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], ChatThreadsHeaderComponent);
    return ChatThreadsHeaderComponent;
}());
export { ChatThreadsHeaderComponent };
//# sourceMappingURL=chat-threads-header.component.js.map