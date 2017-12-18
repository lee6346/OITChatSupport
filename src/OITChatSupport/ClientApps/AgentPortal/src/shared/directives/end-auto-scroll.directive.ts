import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[endAutoScroll]'
})
export class EndAutoScrollDirective {

    @Input('endAutoScroll')
    scrollUp: string;

    constructor(private elRef: ElementRef, private render: Renderer2) {
       
    }
}