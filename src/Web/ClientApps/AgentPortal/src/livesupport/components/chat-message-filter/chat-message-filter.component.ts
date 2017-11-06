import { Component, EventEmitter, Output } from '@angular/core';

import { FilterType, MessageFilter} from '../../models';

@Component({
    selector: 'chat-message-filter',
    templateUrl: './chat-message-filter.component.html',
    styleUrls: ['./chat-message-filter.component.css']
})
export class ChatMessageFilterComponent {


    @Output()
    private textFilter: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    onTextInput(text: string) {
        this.textFilter.emit(text);
    }
}