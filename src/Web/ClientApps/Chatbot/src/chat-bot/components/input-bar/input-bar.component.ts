import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
    selector: 'input-bar',
    templateUrl: './input-bar.component.html',
    styleUrls: ['./input-bar.component.css'],
})
export class InputBarComponent {

    @Output()
    messageSubmit: EventEmitter<string> = new EventEmitter<string>();

    private defaultInput: string | null = null;

    constructor() { }

    public submitMessage(message: string): void {
        this.defaultInput = '';
        if (message !== '') {

            this.messageSubmit.emit(message);
        }
    }
}