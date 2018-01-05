var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var AgentMessageComponent = (function () {
    function AgentMessageComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgentMessageComponent.prototype, "groupMessage", void 0);
    AgentMessageComponent = __decorate([
        Component({
            selector: 'agent-message',
            templateUrl: './agent-message.component.html',
            styleUrls: ['./agent-message.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], AgentMessageComponent);
    return AgentMessageComponent;
}());
export { AgentMessageComponent };
//# sourceMappingURL=agent-message.component.js.map