var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
var ToggleDetailsDirective = (function () {
    function ToggleDetailsDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        renderer.setStyle(elRef.nativeElement, 'backgroundColor', 'gray');
    }
    ToggleDetailsDirective.prototype.onMouseOver = function () {
        var part = this.elRef.nativeElement.querySelector('.card-text');
        this.renderer.setStyle(part, 'display', 'block');
    };
    __decorate([
        HostListener('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToggleDetailsDirective.prototype, "onMouseOver", null);
    ToggleDetailsDirective = __decorate([
        Directive({
            selector: '[toggleDetails]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], ToggleDetailsDirective);
    return ToggleDetailsDirective;
}());
export { ToggleDetailsDirective };
//# sourceMappingURL=toggle-details.directive.js.map