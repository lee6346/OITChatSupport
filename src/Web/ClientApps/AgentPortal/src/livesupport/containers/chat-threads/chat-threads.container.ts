import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromLiveSupport from '../../reducers/index';
import { RemoveThreadAction, SwitchThreadAction, ExpandThreadViewAction } from '../../actions/chat-thread.actions';
import { ChatThread } from '../../models';

@Component({
    selector: 'chat-threads',
    templateUrl: './chat-threads.container.html',
    styleUrls: ['./chat-threads.container.css'],
})
export class ChatThreadsContainer implements OnInit {

    private directLineThreads$: Observable<ChatThread[]>;
    private selectedThreadId$: Observable<string>;
    private currentThreadCount$: Observable<number>;
    private threadsToggle$: Observable<boolean>;
    private timer$: Observable<number>;

    constructor(private store: Store<fromLiveSupport.State>) {
        this.directLineThreads$ = store.select(fromLiveSupport.getThreadList).map(threadList => threadList.toArray());
        this.selectedThreadId$ = store.select(fromLiveSupport.getSelectedThreadId);
        this.currentThreadCount$ = this.directLineThreads$.map(x => x.length);
        this.threadsToggle$ = store.select(fromLiveSupport.getThreadsExpanded);
        this.timer$ = store.select(fromLiveSupport.getCurrentTime);
    }

    ngOnInit() { }

    onSwitchThread(threadId: string): void {

        this.store.dispatch(new SwitchThreadAction(threadId));
    }

    onRemoveThread(threadId: string): void {
        this.store.dispatch(new RemoveThreadAction(threadId));
    }

    onToggleCurrentThreads(expand: boolean) {
        this.store.dispatch(new ExpandThreadViewAction(expand));
    }
}