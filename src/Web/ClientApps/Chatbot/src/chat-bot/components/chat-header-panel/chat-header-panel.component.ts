import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'chat-header-panel',
    templateUrl: './chat-header-panel.component.html',
    styleUrls: ['./chat-header-panel.component.css'],
})
export class ChatHeaderPanelComponent {

    @Output()
    private exitRequest: EventEmitter<void> = new EventEmitter<void>();
    /*
    @Output()
    private hideWindow: EventEmitter<void> = new EventEmitter<void>();
    */
    @Output()
    private transferRequest: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    onExitButtonClicked(): void {
        this.exitRequest.emit();
    }
    /*
    onHideButtonClicked(): void {
        this.hideWindow.emit();
    }
    */
    onTransferButtonClicked(): void {
        this.transferRequest.emit();
    } 

}