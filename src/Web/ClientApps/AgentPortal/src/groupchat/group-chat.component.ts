import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';

import { AgentMessage } from '../model';

@Component({
    selector: 'group-chat',
    templateUrl: './group-chat.component.html',
    styleUrls: ['./group-chat.component.css'],
})
export class GroupChatComponent implements OnInit , OnDestroy{

    @Input()
    private agentId: string;
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    private submittedMessage: AgentMessage;

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    public onMessageSubmitted(message: string) {
        console.log('new message from input received');
        this.submittedMessage = {
            agentId: this.agentId, text: message
        } as AgentMessage;
    }

}