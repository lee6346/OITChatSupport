var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, HostBinding, Renderer2 } from '@angular/core';
var FlashFadeDirective = (function () {
    function FlashFadeDirective(elRef, render) {
        var _this = this;
        this.elRef = elRef;
        this.render = render;
        this.requestCountChange = function () {
            _this.backgroundColor = 'blue';
            _this.render.setStyle(_this.elRef, 'visibility', 'hidden');
        };
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FlashFadeDirective.prototype, "requestCountChange", void 0);
    __decorate([
        HostBinding('style.background-color'),
        __metadata("design:type", String)
    ], FlashFadeDirective.prototype, "backgroundColor", void 0);
    FlashFadeDirective = __decorate([
        Directive({
            selector: '[flashFadeInOut]',
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], FlashFadeDirective);
    return FlashFadeDirective;
}());
export { FlashFadeDirective };
//# sourceMappingURL=flash-fade.directive.js.map