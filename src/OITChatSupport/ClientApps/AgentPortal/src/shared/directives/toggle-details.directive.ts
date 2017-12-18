import { Directive, ElementRef, Input, HostBinding, Renderer2, HostListener } from '@angular/core';


@Directive({
    selector: '[toggleDetails]'
})
export class ToggleDetailsDirective {




    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        renderer.setStyle(elRef.nativeElement, 'backgroundColor', 'gray');
    }

    @HostListener('mouseover') onMouseOver() {
        let part = this.elRef.nativeElement.querySelector('.card-text');
        this.renderer.setStyle(part, 'display', 'block');
    }
}