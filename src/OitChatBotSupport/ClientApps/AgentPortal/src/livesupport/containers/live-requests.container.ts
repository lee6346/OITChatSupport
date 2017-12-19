import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import * as fromLiveRequests from '../reducers/index';
import * as liveRequests from '../actions/live-request.actions';
import { InitializeTimerAction } from '../actions/app-timer.actions';
import { LiveRequest } from '../models';

@Component({
    selector: 'live-requests',
    template: `
        <div class="waiting-threads-container">
            <pending-header (toggleRequests)="onToggleRequests($event)"
                            [expandView]="groupToggle$ | async"
                            [requestCount]="(requestCount$ | async)"></pending-header>
            <pending-list [liveRequests]="liveRequests$ | async"
                            [groupToggle]="groupToggle$ | async"
                            [timer]="timer$ | async"
                            (acceptRequest)="onRequestSelected($event)"></pending-list>
        </div>
    `,
    styles: [`
        .waiting-threads-container {
            height: 100%;
        }
    `]
})
export class LiveRequestsContainer implements OnInit {

    liveRequests$: Observable<LiveRequest[]>;
    timer$: Observable<number>;
    requestCount$: Observable<number>;
    groupToggle$: Observable<boolean>;

    constructor(private store: Store<fromLiveRequests.State>) {
        this.store.dispatch(new InitializeTimerAction(1000));
        this.liveRequests$ = store.select(fromLiveRequests.getLiveRequestList).map(requestList => requestList.toArray());
        this.requestCount$ = this.liveRequests$.map(x => x.length);
        this.timer$ = this.store.select(fromLiveRequests.getCurrentTime);
        this.groupToggle$ = this.store.select(fromLiveRequests.getLiveRequestExpanded);
    }

    ngOnInit() {
        this.store.dispatch(new liveRequests.LoadLiveRequestsAction());
    }

    onRequestSelected(liveRequest: LiveRequest): void {
        this.store.dispatch(new liveRequests.AcceptLiveRequestAction({
            botHandle: liveRequest.botHandle,
            conversationId: liveRequest.conversationId,
            requested: liveRequest.requested,
        } as LiveRequest));
    }

    onToggleRequests(expand: boolean) {
        this.store.dispatch(new liveRequests.ExpandRequestViewAction(expand));
    }

}