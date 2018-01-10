import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'chat-header-panel',
    templateUrl: './chat-header-panel.component.html',
    styleUrls: ['./chat-header-panel.component.css'],
})
export class ChatHeaderPanelComponent {

    @Output()
    transferRequest: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    onTransferButtonClicked(): void {
        this.transferRequest.emit();
    } 
}