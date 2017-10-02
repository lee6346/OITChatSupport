import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { Message } from 'botframework-directlinejs';

import { MessageTransferService } from '../../core';
import { CurrentConversation } from '../../model';

@Component({
    selector: 'input-bar',
    templateUrl: './input-bar.component.html',
    styleUrls: ['./input-bar.component.css'],
})
export class InputBarComponent implements OnInit, OnDestroy {

    @Input()
    private agentId: string;

    private conversationTracker: Rx.Observable<string>;
    private ngUnsubscribe: Rx.Subject<void> = new Rx.Subject<void>();
    private currentConversationId: string;
    private defaultInput: string | null = null;

    constructor(
        private messageTransferService: MessageTransferService
    ) { }

    ngOnInit() {
        this.trackCurrentConversation();
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    public trackCurrentConversation() {
        this.messageTransferService.currentConversation$
            .takeUntil(this.ngUnsubscribe).subscribe(
            (cur) => this.currentConversationId = cur.conversationId,
            (err) => console.log('error'),
            () => console.log('done')
        );
    }

    public sendMessage(message: string): void {
        this.defaultInput = '';
        if (message !== '') {
            console.log("sending message");
            this.messageTransferService.sendInputMessage({
                type: 'message',
                conversation: { id: this.currentConversationId },
                from: { id: this.agentId },
                text:message
            } as Message);
        }
    }

}