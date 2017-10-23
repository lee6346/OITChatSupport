import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import * as fromLiveRequests from '../reducers/index';
import * as liveRequests from '../actions/live-request.actions';
import { LiveRequest } from '../models';

@Component({
    selector: 'live-request',
    templateUrl: './live-request.component.html',
    styleUrls: ['./feature-containers.component.css'],
})
export class LiveRequestComponent implements OnInit {

    liveRequests$: Observable<LiveRequest[]>;

    constructor( private store: Store<fromLiveRequests.State> ) {
        this.liveRequests$ = store.select(fromLiveRequests.getLiveRequestList).map(val => val.toArray());
    }

    ngOnInit() {
        this.store.dispatch(new liveRequests.LoadLiveRequestsAction('askrowdy'));
    }

    onRequestSelected(liveRequest: LiveRequest) {
        this.store.dispatch(new liveRequests.AcceptLiveRequestAction({botHandle: liveRequest.botHandle, conversationId: liveRequest.conversationId, timeRequested: liveRequest.timeRequested, user: 'jvr632'} as LiveRequest));
    }
}