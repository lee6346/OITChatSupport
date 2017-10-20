﻿import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import * as liveRequestAction from '../actions/live-request.actions';
import { LiveRequest, DirectLineThread } from '../models';
import { LiveRequestService } from '../../shared/services/live-request.service';
import { DirectLineService } from '../services/direct-line.service';
import { Conversation } from 'botframework-directlinejs';

@Injectable()
export class LiveRequestEffects {
    constructor(
        private actions$: Actions,
        private liveRequestService: LiveRequestService,
        private directLineService: DirectLineService
    ) { }

    @Effect()
    acceptLiveRequest$: Observable<Action> = this.actions$
        .ofType(liveRequestAction.ACCEPT_LIVE_REQUEST).mergeMap((action: liveRequestAction.AcceptLiveRequestAction) =>
            this.liveRequestService.acceptLiveRequest$(action.liveRequest).map((data: Conversation) => {
                let thread: DirectLineThread = this.directLineService.createDirectLineThread(data);
                return new liveRequestAction.AcceptLiveRequestCompleteAction(thread);
            }))
        .catch((err: any) => {
            console.log('error with accept live request action (1st effect)');
            return of({ type: 'acceptLiveRequest$' });
        });

    @Effect()
    getLiveRequests$: Observable<Action> = this.actions$.ofType(liveRequestAction.LOAD_PENDING_REQUESTS)
        .switchMap((action: liveRequestAction.LoadPendingRequestsAction) =>
            this.liveRequestService.getLiveRequests$(action.group)
            .map((data: LiveRequest[]) => {
                console.log('loading pending requests');
                return new liveRequestAction.LoadPendingRequestsCompleteAction(data);
            })
            .catch((err: any) => {
                console.log('error retrieving live pending requests (2nd effect)');
                return of({ type: 'getLiveRequests$' });
            }));
}