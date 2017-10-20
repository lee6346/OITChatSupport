import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromChatSupport from '../reducers/index';
import * as chatThreads from '../actions/directline-session.actions';
import { DirectLineThread } from '../models';
import { Map } from 'immutable';

@Component({
    selector: 'directline-threads',
    templateUrl: './directline-threads.component.html',
    styleUrls: ['./feature-containers.component.css'],
})
export class DirectLineThreadsComponent implements OnInit {

    private directLineThreads$: Observable<DirectLineThread[]>;
    constructor(
        private store: Store<fromChatSupport.State>
    ) {
        this.directLineThreads$ = store.select(fromChatSupport.getSessionsThreads)
            .map((item: Map<string, DirectLineThread>) => item.toArray());
    }
    ngOnInit() {
       
    }
    onSwitchThread(conversationId: string): void {
        this.store.dispatch(new chatThreads.SwitchSessionAction(conversationId));
    }
}