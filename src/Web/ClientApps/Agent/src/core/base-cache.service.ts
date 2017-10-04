import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DirectLine, Conversation, Activity, ConnectionStatus, Message } from 'botframework-directlinejs';
import { ErrorMessage, DirectLineConnection } from '../model';
import { Observable, BehaviorSubject } from 'rxjs/Rx';


@Injectable()
export class BaseCacheService {


    private conversationCache: BehaviorSubject<Conversation>;

    constructor() {
        this.conversationCache = new BehaviorSubject<Conversation>({} as Conversation);
    }
    

}