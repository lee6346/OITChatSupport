import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'input-bar',
    templateUrl: './input-bar.component.html',
    styleUrls: ['./input-bar.component.css'],
})
export class InputBarComponent implements OnInit{

    @Output()
    private messageSubmit: EventEmitter<string> = new EventEmitter<string>();
    
    private defaultInput: string | null = null;
    constructor(
    ) {}

    ngOnInit() { }

    public submitMessage(message: string): void {
        this.defaultInput = '';
        if (message !== '') {
            
            this.messageSubmit.emit(message);
        }
    }
}