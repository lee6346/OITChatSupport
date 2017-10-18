import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromChatSupport from '../reducers/index';
import * as chatThreads from '../actions/directline-thread.actions';
import { DirectLineThreadStatus } from '../models';

@Component({
    selector: 'directline-threads',
    templateUrl: './directline-threads.component.html',
    styleUrls: ['./directline-threads.component.css'],
})
export class DirectLineThreadsComponent implements OnInit {

    private directLineThreadStats$: Observable<DirectLineThreadStatus[]>;
    constructor(
        private store: Store<fromChatSupport.State>
    ) {
        this.directLineThreadStats$ = store.select(fromChatSupport.getAllThreadStatus);
    }
    ngOnInit() {
       
    }
    onSwitchThread(conversationId: string): void {
        this.store.dispatch(new chatThreads.SelectThreadAction(conversationId));
    }
}