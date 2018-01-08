import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'input-bar',
    templateUrl: './input-bar.component.html',
    styleUrls: ['./input-bar.component.css'],
})
export class InputBarComponent {

    @Output()
    messageSubmit: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    onSubmitInput(message: string): void {
        this.messageSubmit.emit(message);
    }
}