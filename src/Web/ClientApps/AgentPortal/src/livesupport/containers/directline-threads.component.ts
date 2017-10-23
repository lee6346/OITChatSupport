import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromLiveSupport from '../reducers/index';
import * as chatThreads from '../actions/directline-thread.actions';
import { DirectLineThread } from '../models';
import { Map } from 'immutable';

@Component({
    selector: 'directline-threads',
    templateUrl: './directline-threads.component.html',
    styleUrls: ['./feature-containers.component.css'],
})
export class DirectLineThreadsComponent implements OnInit {

    private directLineThreads$: Observable<DirectLineThread[]>;

    constructor( private store: Store<fromLiveSupport.State> ) {
        this.directLineThreads$ = store.select(fromLiveSupport.getAllThreads).map(val => val.toArray());
            //.map((item: Map<string, DirectLineThread>) => item.toArray());
    }

    ngOnInit() { }

    onSwitchThread(conversationId: string): void {
        this.store.dispatch(new chatThreads.SwitchThreadAction(conversationId));
    }
}