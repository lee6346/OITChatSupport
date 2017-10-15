import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

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
    acceptLiveRequest$: Observable<Action> = this.actions$
        .ofType(liveRequestAction.ACCEPT_LIVE_REQUEST).mergeMap((action: liveRequestAction.AcceptLiveRequestAction) => {
            return [
                new GetConnectionThreadAction(action.liveRequest.conversationId),
                new liveRequestAction.AcceptLiveRequestCompleteAction(action.liveRequest.conversationId)
            ];
        })
        .catch((err: any) => {
            console.log('error routing two actions after accepting live requests');
            return of({ type: 'acceptLiveRequest$' });
        });

    @Effect()
    getLiveRequests$: Observable<Action> = this.actions$.ofType(liveRequestAction.LOAD_PENDING_REQUESTS)
        .switchMap((action: liveRequestAction.LoadPendingRequestsAction) =>
            this.liveRequestService.getRequests$(action.agentId)
                .map((data: LiveRequest[]) => {
                    console.log('loading pending requests');
                    return new liveRequestAction.LoadPendingRequestsCompleteAction(data);
                })
                .catch((err: any) => {
                    console.log('error retrieving live requests from db');
                    return of({ type: 'getLiveRequests$' });
                })
        );
}