import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Activity } from 'botframework-directlinejs';
import { DirectLineChatLoad, DirectLineThread, DirectLineMessage } from '../models';
import * as fromChatSupport from '../reducers/index';
import * as chatSessions from '../actions/directline-session.actions';
import { List } from 'immutable';

@Component({
    selector: 'directline-session',
    templateUrl: './directline-session.component.html',
    styleUrls: ['./feature-containers.component.css'],
})
export class DirectLineSessionComponent implements OnInit {



    private sessionMessages$: Observable<DirectLineMessage[]>;
    private cachedMessages$: Observable<DirectLineMessage[]>;
    private currentThread: DirectLineThread;

    constructor(
        private store: Store<fromChatSupport.State>
    ) {
        
        
        this.sessionMessages$ = store.select(fromChatSupport.getCurrentMessages).map((item: List<DirectLineMessage>) => item.toArray());
        this.cachedMessages$ = store.select(fromChatSupport.getCurrentThreadCachedMessages).map((item: List<DirectLineMessage>) => item.toArray());
        store.select(fromChatSupport.getCurrentThread).subscribe(
            (next: DirectLineThread) => this.currentThread = next,
            (err: any) => console.log('error'),
            () => console.log('complete')
        );
    }

    ngOnInit() {
    }

    onMessageSubmitted(message: string) {
        if(this.currentThread.conversationId){
            let payload: DirectLineChatLoad = {
                activity: {
                    from: {
                        id: 'jvr632'
                    },
                    conversation: {
                        id: this.currentThread.conversationId
                    },
                    type: 'message',
                    text: message
                },
                connection: this.currentThread.connection
            };
            this.store.dispatch(new chatSessions.SendSessionActivityAction(payload));
        }
    }

}