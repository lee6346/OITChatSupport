import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Activity } from 'botframework-directlinejs';
import { DirectLineChatLoad, DirectLineThread, DirectLineMessage } from '../models';
import * as fromLiveSupport from '../reducers/index';
import * as chatMessages from '../actions/directline-message.actions';
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

    constructor( private store: Store<fromLiveSupport.State> )
    {
        this.sessionMessages$ = store.select(fromLiveSupport.getSelectedThreadMessages).map(val => val.toArray()); 
        this.cachedMessages$ = store.select(fromLiveSupport.getSelectedThreadCachedMessages);
    }

    ngOnInit() {
        this.subscribeToCurrentThread();
    }

    subscribeToCurrentThread() {
        this.store.select(fromLiveSupport.getSelectedThread).filter(this.filterUndefinedConversationIds)
            .subscribe(
            (thread: DirectLineThread) => {
                console.log('i have receivd the new selected thread: ' + thread.conversationId);
                this.currentThread = thread;
            },
            (err: any) => console.log('error reading the currernt thread'),
            () => console.log('completed...')
        );
    }

    filterUndefinedConversationIds(thread: DirectLineThread): boolean {
        if (typeof thread === 'undefined')
            return false;
        if (typeof thread.conversationId === 'undefined')
            return false;
        return true;
    }

    onMessageSubmitted(message: string) {
        if (this.filterUndefinedConversationIds(this.currentThread)) {
            let payload: DirectLineChatLoad = {
                activity: {
                    from: { id: 'jvr632' },
                    conversation: { id: this.currentThread.conversationId },
                    type: 'message', text: message
                },
                connection: this.currentThread.connection
            };
            this.store.dispatch(new chatMessages.SendMessageActivityAction(payload));
        }
        else { console.log('the conversation id is undefined!'); }
    }
}