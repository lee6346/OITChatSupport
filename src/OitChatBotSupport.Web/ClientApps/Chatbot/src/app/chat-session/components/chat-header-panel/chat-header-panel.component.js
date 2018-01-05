var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
var ChatHeaderPanelComponent = (function () {
    function ChatHeaderPanelComponent() {
        this.transferRequest = new EventEmitter();
    }
    ChatHeaderPanelComponent.prototype.onTransferButtonClicked = function () {
        this.transferRequest.emit();
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ChatHeaderPanelComponent.prototype, "transferRequest", void 0);
    ChatHeaderPanelComponent = __decorate([
        Component({
            selector: 'chat-header-panel',
            templateUrl: './chat-header-panel.component.html',
            styleUrls: ['./chat-header-panel.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], ChatHeaderPanelComponent);
    return ChatHeaderPanelComponent;
}());
export { ChatHeaderPanelComponent };
//# sourceMappingURL=chat-header-panel.component.js.map