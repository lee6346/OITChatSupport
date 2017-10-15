import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { DirectLineSessionsState, DirectLineSessionState, } from '../store/reducer/direct-line.reducer';
import { ChangeDirectLineSessionAction } from '../store/action/direct-line.action';
import { DirectLineThread } from '../shared/model';

@Component({
    selector: 'directline-sessions',
    templateUrl: './directline-sessions.component.html',
    styleUrls: ['./directline-sessions.component.css'],
})
export class DirectLineSessionsComponent implements OnInit{
   
    private directLineConnections$: Observable<DirectLineSessionState[]>;
    private directLineCurrent$: Observable<string>;
    constructor(
        private store: Store<DirectLineSessionsState>
    ) {}
    ngOnInit() {
        this.directLineConnections$ = this.store.select(
            (state: DirectLineSessionsState) => state.directLineSessions);
        this.directLineCurrent$ = this.store.select((state: DirectLineSessionsState) => state.currentSessionId);
    }
    onSwitchThread(conversationId: string): void {
        this.store.dispatch(new ChangeDirectLineSessionAction(conversationId));
    }
}