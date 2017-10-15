import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Activity } from 'botframework-directlinejs';
import { DirectLineThread, DirectLineMessageLoad } from '../shared/model';
import { DirectLineSessionState } from '../store/reducer/direct-line.reducer';
import { SendMessageActivityAction } from '../store/action/direct-line.action';

@Component({
    selector: 'live-support',
    templateUrl: './live-support.component.html',
    styleUrls: ['./live-support.component.css'],  
})
export class LiveSupportComponent implements OnInit {


    private chatMessages$: Observable<Activity[]>;
    private chatThread$: Observable<DirectLineThread>;
 
    constructor(
        private store: Store<DirectLineSessionState>
    ) {}

    ngOnInit() {
        this.chatMessages$ = this.store.select((state: DirectLineSessionState) => state.activityMessages);
        this.chatThread$ = this.store.select((state: DirectLineSessionState) => state.directLineThread);
    }

    onMessageSubmitted(text: string) {
        this.chatThread$.subscribe(
            (thread: DirectLineThread) => {
                let msg: Activity = {
                    from: { id: 'jvr632' },
                    conversation: { id: thread.conversationId },
                    type: 'message',
                    text: text
                };
                let msgLoad: DirectLineMessageLoad = {
                    directLineConnector: thread.directLineConnection,
                    message: msg
                };
                this.store.dispatch(new SendMessageActivityAction(msgLoad));

            },
            (err: any) => console.log('error dispatching chat message'),
            () => console.log('complete')
        );
    }
    onHideCachedDisplay(hide: boolean) {
    }
}