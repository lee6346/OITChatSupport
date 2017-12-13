import { Component, Output, EventEmitter } from '@angular/core';


/**
 * Input bar component for typing and submitting messages to send
 */
@Component({
    selector: 'input-bar',
    templateUrl: './input-bar.component.html',
    styleUrls: ['./input-bar.component.css'],
})
export class InputBarComponent {
    /**
     * EventEmitter to send message
     */
    @Output()
    messageSubmit: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    /**
     * Callback function that emits messageSubmit event when submit button is clicked or keyboard-enter
     * @param {string} message The text message to send
     */
    onSubmitInput(message: string): void {
        this.messageSubmit.emit(message);
    }
}