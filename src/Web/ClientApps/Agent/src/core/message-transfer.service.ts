import { Injectable } from '@angular/core';
import { HiddenMessage, CurrentConversation } from '../model';
import { Message } from 'botframework-directlinejs';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
/**
 * This service is responsible for transferring messages between components
 * (messages from input-bar to chat-display, messages from chat-display to minimized windows, etc)
 */
@Injectable()
export class MessageTransferService {

    constructor() { }

    private hiddenMessageStream: Subject<HiddenMessage> = new Subject<HiddenMessage>();
    private currentConversationStream: Subject<CurrentConversation> = new Subject<CurrentConversation>();
    private inputMessageStream: Subject<Message> = new Subject<Message>();

    public hiddenMessage$: Observable<HiddenMessage> = this.hiddenMessageStream.asObservable().share();
    public currentConversation$: Observable<CurrentConversation> = this.currentConversationStream.asObservable().share();
    public inputMessage$: Observable<Message> = this.inputMessageStream.asObservable().share();


    public sendHiddenMessage(hiddenMessage: HiddenMessage): void {
        this.hiddenMessageStream.next(hiddenMessage);
    }

    public sendCurrentConversation(currentConversation: CurrentConversation): void {
        this.currentConversationStream.next(currentConversation);
    }

    public sendInputMessage(message: Message): void {
        this.inputMessageStream.next(message);
    }

}