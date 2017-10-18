import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import * as fromLiveRequests from './reducers/index';
import * as liveRequests from './actions/live-request.actions';
import { LiveRequest } from './models/live-request.model';

@Component({
    selector: 'live-request',
    templateUrl: './live-request.component.html',
    styleUrls: ['./live-request.component.css']
})
export class LiveRequestComponent implements OnInit {

    liveRequests$: Observable<LiveRequest[]>;
    constructor(
        private store: Store<fromLiveRequests.State>
    ) {
        console.log('live request component set');
        this.liveRequests$ = store.select(fromLiveRequests.getAllRequests);
        console.log('store live request observables assigned');
    }
    ngOnInit() {
        console.log('dispatches rquest to server to load pending requests');
        this.store.dispatch(new liveRequests.LoadPendingRequestsAction('askrowdy'));
        console.log('dispatch good');
    }
    onRequestSelected(liveRequest: LiveRequest) {
        this.store.dispatch(new liveRequests.AcceptLiveRequestAction(liveRequest));
    }
}