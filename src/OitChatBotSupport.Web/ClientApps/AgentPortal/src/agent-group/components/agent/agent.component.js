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
var AgentComponent = (function () {
    function AgentComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgentComponent.prototype, "agent", void 0);
    AgentComponent = __decorate([
        Component({
            selector: 'agent',
            templateUrl: './agent.component.html',
            styleUrls: ['./agent.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], AgentComponent);
    return AgentComponent;
}());
export { AgentComponent };
//# sourceMappingURL=agent.component.js.map