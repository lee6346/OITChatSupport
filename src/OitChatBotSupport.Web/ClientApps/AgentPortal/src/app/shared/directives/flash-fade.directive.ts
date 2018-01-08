import { Directive, ElementRef, Input, HostBinding, Renderer2 } from '@angular/core';

@Directive({
    selector: '[flashFadeInOut]',
    
})
export class FlashFadeDirective {

    @Input()
    requestCountChange = () => {
        this.backgroundColor = 'blue';
        this.render.setStyle(this.elRef, 'visibility', 'hidden');
        
    };


    @HostBinding('style.background-color')
    backgroundColor: string;

    constructor(private elRef: ElementRef, private render: Renderer2) {

    }
}