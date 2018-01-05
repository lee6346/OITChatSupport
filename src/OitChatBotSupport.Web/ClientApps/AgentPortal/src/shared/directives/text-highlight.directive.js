var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
var TextHighlightDirective = (function () {
    function TextHighlightDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    TextHighlightDirective.prototype.ngOnInit = function () {
        if (typeof this.highlightColor === 'undefined')
            this.highlightColor = '';
        if (this.searchQuery === '')
            this.renderer.setProperty(this.elRef.nativeElement, 'innerHTML', this.text);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TextHighlightDirective.prototype, "text", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TextHighlightDirective.prototype, "searchQuery", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TextHighlightDirective.prototype, "highlightColor", void 0);
    TextHighlightDirective = __decorate([
        Directive({
            selector: '[textHighlight]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], TextHighlightDirective);
    return TextHighlightDirective;
}());
export { TextHighlightDirective };
//# sourceMappingURL=text-highlight.directive.js.map