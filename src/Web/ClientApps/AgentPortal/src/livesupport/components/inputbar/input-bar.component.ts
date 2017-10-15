import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'input-bar',
    templateUrl: './input-bar.component.html',
    styleUrls: ['./input-bar.component.css'],
})
export class InputBarComponent{

    @Output()
    private messageSubmit: EventEmitter<string> = new EventEmitter<string>(); 
    private defaultInput: string | null = null;
    constructor(
    ) { console.log('i currerntly have no state, so no need');}

    public submitMessage(message: string): void {
        this.defaultInput = '';
        if (message !== '') {
            this.messageSubmit.emit(message);
        }
    }
}