import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[textHighlight]'
})
export class TextHighlightDirective implements OnInit{
    @Input()
    text: string;

    @Input()
    searchQuery: string;

    @Input()
    highlightColor: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit() {
        if (typeof this.highlightColor === 'undefined')
            this.highlightColor = '';
        if (this.searchQuery === '')
            this.renderer.setProperty(this.elRef.nativeElement, 'innerHTML', this.text);

    }

}