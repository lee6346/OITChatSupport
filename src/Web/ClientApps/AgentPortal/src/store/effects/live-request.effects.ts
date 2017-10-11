import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as liveRequestAction from '../action/live-request.action';
import { GetConnectionThreadAction } from '../action/direct-line.action';
import { LiveRequest } from '../../shared/model';
import { LiveRequestService } from '../../shared/services/live-request.service';


@Injectable()
export class LiveRequestEffects {
    constructor(
        private actions$: Actions,
        private liveRequestService: LiveRequestService
    ) { }


    @Effect()
    acceptLiveRequest$: Observable<Action> = this.actions$.ofType(liveRequestAction.ACCEPT_LIVE_REQUEST)
        .switchMap((action: liveRequestAction.AcceptLiveRequestAction) => {
            this.liveRequestService.acceptRequest(action.liveRequest);
            return Observable.of(new liveRequestAction.AcceptLiveRequestCompleteAction(action.liveRequest.conversationId));
        }
    );


    @Effect()
    getLiveRequests$: Observable<Action> = this.actions$.ofType(liveRequestAction.LOAD_PENDING_REQUESTS)
        .switchMap((action: liveRequestAction.LoadPendingRequestsAction) =>
            this.liveRequestService.getRequests$(action.agentId)
                .map((data: LiveRequest[]) => {
                    return new liveRequestAction.LoadPendingRequestsCompleteAction(data);
                })
                .catch((err: any) => {
                    return of({ type: 'getLiveRequests$' });
                })
    );



}