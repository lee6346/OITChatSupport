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
var InputBarComponent = (function () {
    function InputBarComponent() {
        this.messageSubmit = new EventEmitter();
    }
    InputBarComponent.prototype.onSubmitInput = function (message) {
        this.messageSubmit.emit(message);
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], InputBarComponent.prototype, "messageSubmit", void 0);
    InputBarComponent = __decorate([
        Component({
            selector: 'input-bar',
            templateUrl: './input-bar.component.html',
            styleUrls: ['./input-bar.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], InputBarComponent);
    return InputBarComponent;
}());
export { InputBarComponent };
//# sourceMappingURL=input-bar.component.js.map