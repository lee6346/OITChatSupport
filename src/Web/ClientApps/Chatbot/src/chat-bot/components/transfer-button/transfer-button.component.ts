import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
    selector: 'transfer-button',
    templateUrl: './transfer-button.component.html',
    styleUrls: ['./transfer-button.component.css'],
})
export class TransferButtonComponent {

    @Output()
    transferRequest: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    public onTransferButtonClicked(): void {
        this.transferRequest.emit();
    }
}