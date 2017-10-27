import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import * as fromLiveRequests from '../../reducers/index';
import * as liveRequests from '../../actions/live-request.actions';
import { LiveRequest } from '../../models';

@Component({
    selector: 'live-requests',
    templateUrl: './live-requests.container.html',
    styleUrls: ['./live-requests.container.css'],
})
export class LiveRequestsContainer implements OnInit {

    liveRequests$: Observable<LiveRequest[]>;

    groupExpandToggles: boolean = false;

    constructor(private store: Store<fromLiveRequests.State>) {
        this.liveRequests$ = store.select(fromLiveRequests.getLiveRequestList).map(requestList => requestList.toArray());
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

    expandAllRequests(): void {
        this.groupExpandToggles = true;
    }

    collapseAllRequests(): void {
        this.groupExpandToggles = false;
    }
}