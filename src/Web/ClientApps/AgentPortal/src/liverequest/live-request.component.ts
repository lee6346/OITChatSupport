import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { LiveRequestsState } from '../store/reducer/live-request.reducer';
import { AcceptLiveRequestAction, LoadPendingRequestsAction } from '../store/action/live-request.action';
import { LiveRequest } from '../shared/model';

@Component({
    selector: 'live-request',
    templateUrl: './live-request.component.html',
    styleUrls: ['./live-request.component.css']
})
export class LiveRequestComponent implements OnInit {

    liveRequests$: Observable<LiveRequest[]>;
    constructor(
        private store: Store<LiveRequestsState>
    ) {
        console.log('live request component set');
        this.liveRequests$ = this.store.select(state => state.liveRequests);
        console.log('store live request observables assigned');
    }
    ngOnInit() {
        console.log('dispatches rquest to server to load pending requests');
        this.store.dispatch(new LoadPendingRequestsAction('jvr632'));
        console.log('dispatch good');
    }
    onRequestSelected(liveRequest: LiveRequest) {
        this.store.dispatch(new AcceptLiveRequestAction(liveRequest));
    }
}