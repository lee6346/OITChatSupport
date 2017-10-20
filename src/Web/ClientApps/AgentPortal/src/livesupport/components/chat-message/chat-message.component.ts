import { 
    Component, 
    Input, 
    OnInit, 
    ChangeDetectionStrategy
    } from '@angular/core';

import { DirectLineMessage } from '../../models';

@Component({
    selector: 'chat-message',
    templateUrl: './chat-message.component.html',
    styleUrls: ['./chat-message.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageComponent implements OnInit{

    @Input()
    chatMessage: DirectLineMessage;

    constructor(
    ) { }

    ngOnInit() {
        console.log('messages: ' + this.chatMessage);
    }
}