import { Component, OnInit, OnDestroy, EventEmitter, Injector } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import * as Rx from 'rxjs/Rx';
import { DirectLine, Conversation, Message, Activity } from 'botframework-directlinejs';

import { MessageTransferService, DirectLineService } from '../../core';
import { HiddenMessage, CurrentConversation } from '../../model';

@Component({
    selector: 'chat-session',
    templateUrl: './chat-session.component.html',
    styleUrls: ['./chat-session.component.css'],
})
export class ChatSessionComponent implements OnInit, OnDestroy {

    private agentId: string;
    private conversationId: string;
    private chatSessionHidden: boolean = false;

    private ngUnsubscribe: Rx.Subject<void> = new Rx.Subject<void>();


    constructor(
        private injector: Injector,
        private messageTransferService: MessageTransferService,
        private directLineService: DirectLineService
    ) {
        this.conversationId = this.injector.get('conversationId');
        this.agentId = this.injector.get('agentId');
    }


    ngOnInit() { }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    public trackChatSessionState(): void {
        this.messageTransferService.currentConversation$
            .takeUntil(this.ngUnsubscribe)
            .subscribe(
            next => this.chatSessionHidden = next.conversationId !== this.conversationId,
            err => console.log('error'),
            () => console.log('complete')
        );
    }

    public trackInputMessages(): void {
        this.messageTransferService.hiddenMessage$
            .takeUntil(this.ngUnsubscribe)
            .subscribe(
            next => console.log('next'),
            err => console.log('err'),
            () => console.log('complete')

        );

    }

    public trackDirectLineMessages(): void {
        
    }

    public processDirectLineMessages(message: Activity): void {
        if (this.chatSessionHidden) {
        }
    }

    public routeHiddenMessage(conversationId: string, disconnect: boolean): void {
        this.messageTransferService.sendHiddenMessage({
            conversationId: conversationId,
            disconnect: disconnect
        } as HiddenMessage);
    }


}