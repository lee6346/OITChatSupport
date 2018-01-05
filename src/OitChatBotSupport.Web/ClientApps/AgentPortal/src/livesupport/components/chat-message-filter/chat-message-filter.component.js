var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
var ChatMessageFilterComponent = (function () {
    function ChatMessageFilterComponent() {
        this.textFilter = new EventEmitter();
    }
    ChatMessageFilterComponent.prototype.onTextInput = function (text) {
        this.textFilter.emit(text);
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ChatMessageFilterComponent.prototype, "textFilter", void 0);
    ChatMessageFilterComponent = __decorate([
        Component({
            selector: 'chat-message-filter',
            templateUrl: './chat-message-filter.component.html',
            styleUrls: ['./chat-message-filter.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ChatMessageFilterComponent);
    return ChatMessageFilterComponent;
}());
export { ChatMessageFilterComponent };
//# sourceMappingURL=chat-message-filter.component.js.map