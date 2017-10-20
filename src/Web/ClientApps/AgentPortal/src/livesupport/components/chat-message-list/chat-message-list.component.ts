import { 
    Component, 
    Input, 
    OnInit, 
    ChangeDetectionStrategy 
    } from '@angular/core';

import { DirectLineMessage } from '../../models';

@Component({
    selector: 'chat-message-list',
    templateUrl: './chat-message-list.component.html',
    styleUrls: ['./chat-message-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageListComponent implements OnInit{

    @Input()
    chatMessages: DirectLineMessage[];

    constructor() { }

    ngOnInit() {
    }
}