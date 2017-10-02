import { Injectable } from '@angular/core';
import { HiddenMessage, CurrentConversation } from '../model';
import { Message } from 'botframework-directlinejs';
import * as Rx from 'rxjs/Rx';
/**
 * This service is responsible for transferring messages between components
 * (messages from input-bar to chat-display, messages from chat-display to minimized windows, etc)
 */
@Injectable()
export class MessageTransferService {

    constructor() { }

    private hiddenMessageStream: Rx.Subject<HiddenMessage> = new Rx.Subject<HiddenMessage>();
    private currentConversationStream: Rx.Subject<CurrentConversation> = new Rx.Subject<CurrentConversation>();
    private inputMessageStream: Rx.Subject<Message> = new Rx.Subject<Message>();

    public hiddenMessage$: Rx.Observable<HiddenMessage> = this.hiddenMessageStream.asObservable();
    public currentConversation$: Rx.Observable<CurrentConversation> = this.currentConversationStream.asObservable();
    public inputMessage$: Rx.Observable<Message> = this.inputMessageStream.asObservable();

    public sendHiddenMessage(hiddenMessage: HiddenMessage): void {
        this.hiddenMessageStream.next(hiddenMessage);
    }

    public sendCurrentConversation(currentConversation: CurrentConversation): void {
        this.currentConversationStream.next(currentConversation);
    }

    public sendInputMessage(message: Message) {
        this.inputMessageStream.next(message);
    }

}