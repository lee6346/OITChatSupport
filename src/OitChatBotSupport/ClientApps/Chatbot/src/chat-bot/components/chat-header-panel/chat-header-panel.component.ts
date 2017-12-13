import { Component, Output, EventEmitter } from '@angular/core';

/**
 * The Chat header pannel component at top of chat window
 *
 * Displays the exit button and button to make request for agent transfer
 */
@Component({
    selector: 'chat-header-panel',
    templateUrl: './chat-header-panel.component.html',
    styleUrls: ['./chat-header-panel.component.css'],
})
export class ChatHeaderPanelComponent {
    /**
     * EventEmitter to closing chat window 
     */
    @Output()
    private exitRequest: EventEmitter<void> = new EventEmitter<void>();

    /**
     * EventEmitter to make agent transfer request
     */
    @Output()
    private transferRequest: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    /**
     * Callback function that emits exitRequest when exit button is clicked
     */
    onExitButtonClicked(): void {
        this.exitRequest.emit();
    }

    /**
     * Callback function that emits transferRequest event when agent transfer button is clicked
     */
    onTransferButtonClicked(): void {
        this.transferRequest.emit();
    } 
}