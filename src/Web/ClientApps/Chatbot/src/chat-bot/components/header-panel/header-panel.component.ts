import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
    selector: 'header-panel',
    templateUrl: './header-panel.component.html',
    styleUrls: ['./header-panel.component.css'],
})
export class HeaderPanelComponent {

    @Output()
    exitRequest: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    public onExitButtonClicked(): void {
        this.exitRequest.emit();
    }


}