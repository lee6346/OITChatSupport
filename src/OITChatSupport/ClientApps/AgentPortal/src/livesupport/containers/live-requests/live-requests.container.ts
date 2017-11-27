import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import * as fromLiveRequests from '../../reducers/index';
import * as liveRequests from '../../actions/live-request.actions';
import { EnableTimerAction, InitializeTimerAction } from '../../actions/app-timer.actions';
import { LiveRequest } from '../../models';

@Component({
    selector: 'live-requests',
    templateUrl: './live-requests.container.html',
    styleUrls: ['./live-requests.container.css'],
})
export class LiveRequestsContainer implements OnInit {

    liveRequests$: Observable<LiveRequest[]>;
    timer$: Observable<number>;
    timerActive$: Observable<boolean>;
    requestCount$: Observable<number>;
    groupToggle$: Observable<boolean>;

    constructor(private store: Store<fromLiveRequests.State>) {
        this.store.dispatch(new InitializeTimerAction(1000));
        this.liveRequests$ = store.select(fromLiveRequests.getLiveRequestList).map(requestList => requestList.toArray());
        this.requestCount$ = this.liveRequests$.map(x => x.length);
        this.timer$ = this.store.select(fromLiveRequests.getCurrentTime);
        this.timerActive$ = this.store.select(fromLiveRequests.getTimerActiveStatus);
        this.groupToggle$ = this.store.select(fromLiveRequests.getLiveRequestExpanded);
    }

    ngOnInit() {
        this.store.dispatch(new liveRequests.LoadLiveRequestsAction('askrowdy'));
    }

    onRequestSelected(liveRequest: LiveRequest): void {
        this.store.dispatch(new liveRequests.AcceptLiveRequestAction({
            botHandle: liveRequest.botHandle,
            conversationId: liveRequest.conversationId,
            timeRequested: liveRequest.timeRequested,
            user: 'jvr632'
        } as LiveRequest));
    }

    enableTimer(enable: boolean) {
        this.store.dispatch(new EnableTimerAction(enable));
    }

    onToggleRequests(expand: boolean) {
        this.store.dispatch(new liveRequests.ExpandRequestViewAction(expand));
    }

}