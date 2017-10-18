import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Activity, IBotConnection } from 'botframework-directlinejs';
import { DirectLineSession, DirectLineChatLoad } from '../models';
import * as fromChatSupport from '../reducers/index';
import * as chatSessions from '../actions/directline-session.actions';

@Component({
    selector: 'directline-session',
    templateUrl: './directline-session.component.html',
    styleUrls: ['./directline-session.component.css'],
})
export class DirectLineSessionComponent implements OnInit {



    private sessionMessages$: Observable<Activity[]>;
    private currentSession: DirectLineSession;

    constructor(
        private store: Store<fromChatSupport.State>
    ) {
        
        this.sessionMessages$ = store.select(fromChatSupport.getSelectedSession)
            .map((chatSession: DirectLineSession) => chatSession.activityMessages);

        store.select(fromChatSupport.getSelectedSession).subscribe(
            (next: DirectLineSession) => this.currentSession = next,
            (err: any) => console.log('error'),
            () => console.log('complete')
        );
    }

    ngOnInit() {
    }

    onMessageSubmitted(message: string) {
        let payload: DirectLineChatLoad = {
            activity: {
                from: {
                    id: 'jvr632'
                },
                conversation: {
                    id: this.currentSession.conversationId
                },
                type: 'message',
                text: message
            },
            connection: this.currentSession.connection
        };
        this.store.dispatch(new chatSessions.SendSessionActivityAction(payload));
    }

}