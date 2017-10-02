import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Rx from 'rxjs/Rx';

import { MessageTransferService } from '../../core';
import { HiddenMessage, HiddenChatSession, CurrentConversation } from '../../model';

@Component({
    selector: 'minimize-list',
    templateUrl: './minimized-list.component.html',
    styleUrls: ['./minimized-list.component.css'],   
})
export class MinimizeListComponent implements OnInit, OnDestroy{

    private hiddenChatSessions: HiddenChatSession[] = [];

    private ngUnsubscribe: Rx.Subject<void> = new Rx.Subject<void>();

    constructor(
        private messageTransferService: MessageTransferService
    ) { }

    ngOnInit() {
        this.trackHiddenMessages();
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    public trackHiddenMessages(): void {
        this.messageTransferService.hiddenMessage$
            .takeUntil(this.ngUnsubscribe)
            .subscribe(
            next => this.processHiddenMessage(next),
            err => console.log('error'),
            () => console.log('complete')
        );
    }

    public displayHiddenChatSession(hiddenChatSession: HiddenChatSession): void {
        this.messageTransferService.sendCurrentConversation(
            {
                conversationId: hiddenChatSession.conversationId
            } as CurrentConversation
        );

        this.hiddenChatSessions.splice(
            this.getSessionIndex(hiddenChatSession.conversationId), 1
        );
    }

    public processHiddenMessage(hiddenMessage: HiddenMessage): void {
        let index = this.getSessionIndex(hiddenMessage.conversationId);
        if (index === -1) {
            this.hiddenChatSessions.push({
                conversationId: hiddenMessage.conversationId,
                messageCount: 1,
                disconnected: false
            } as HiddenChatSession)
        }
        else if (hiddenMessage.disconnect)
            this.hiddenChatSessions[index].disconnected === true;
        else
            this.hiddenChatSessions[index].messageCount++;
    }

    public getSessionIndex(conversationId: string): number {
        return this.hiddenChatSessions
            .findIndex(item => item.conversationId === conversationId);
    }


}