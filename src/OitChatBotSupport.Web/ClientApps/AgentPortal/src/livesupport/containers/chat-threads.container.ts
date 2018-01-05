import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromLiveSupport from '../reducers/index';
import { RemoveThreadAction, SwitchThreadAction } from '../actions/chat-thread.actions';
import { ChatThread } from '../models';

@Component({
    selector: 'chat-threads',
    template: `
        <div class="current-threads-container">
            <chat-threads-header [currentThreadCount]="currentThreadCount$ | async"></chat-threads-header>
            <chat-thread-list [threads]="directLineThreads$ | async"
                                [selectedThreadId]="selectedThreadId$ | async"
                                [timer]="timer$ | async"
                                (switchThread)="onSwitchThread($event)"
                                (removeThread)="onRemoveThread($event)"></chat-thread-list> 
        </div>
    `,
    styles: [`
    .current-threads-container {
        height: 100%;
    }
    `]
})
export class ChatThreadsContainer implements OnInit {

    private directLineThreads$: Observable<ChatThread[]>;
    private selectedThreadId$: Observable<string>;
    private currentThreadCount$: Observable<number>;
    private timer$: Observable<number>;

    constructor(private store: Store<fromLiveSupport.State>) {
        this.directLineThreads$ = store.select(fromLiveSupport.getThreadList).map(threadList => threadList.toArray());
        this.selectedThreadId$ = store.select(fromLiveSupport.getSelectedThreadId);
        this.currentThreadCount$ = this.directLineThreads$.map(x => x.length);
        this.timer$ = store.select(fromLiveSupport.getCurrentTime);
    }

    ngOnInit() { }

    onSwitchThread(threadId: string): void {

        this.store.dispatch(new SwitchThreadAction(threadId));
    }

    onRemoveThread(threadId: string): void {
        this.store.dispatch(new RemoveThreadAction(threadId));
    }

}