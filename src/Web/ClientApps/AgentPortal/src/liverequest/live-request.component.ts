import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { LiveRequestsState } from '../store/app-data.store';
import { AcceptLiveRequestAction, LoadPendingRequestsAction } from '../store/action/live-request.action';
import { LiveRequest } from '../shared/model';

@Component({
    selector: 'live-request',
    templateUrl: './live-request.component.html',
    styleUrls: ['./live-request.component.css']
})
export class LiveRequestComponent implements OnInit, OnDestroy {

    liveRequests$: Observable<LiveRequest[]>;

    constructor(
        private store: Store<LiveRequestsState>
    ) {
        this.liveRequests$ = this.store.select(state => state.liveRequests);
    }

    ngOnInit() {
        this.store.dispatch(new LoadPendingRequestsAction('jvr632'));
    }
    ngOnDestroy() { }

    onRequestSelected(liveRequest: LiveRequest) {
        this.store.dispatch(new AcceptLiveRequestAction(liveRequest));
    }
}