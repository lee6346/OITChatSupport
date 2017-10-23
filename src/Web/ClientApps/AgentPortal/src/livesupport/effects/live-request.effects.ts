﻿import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import * as liveRequestAction from '../actions/live-request.actions';
import { LiveRequest } from '../models';
import { LiveRequestService } from '../../shared/live-request.service';
import { Conversation } from 'botframework-directlinejs';

@Injectable()
export class LiveRequestEffects {
    constructor(
        private actions$: Actions,
        private liveRequestService: LiveRequestService
    ) { }

    @Effect()
    acceptLiveRequest$: Observable<Action> = this.actions$
        .ofType(liveRequestAction.ACCEPT_LIVE_REQUEST).mergeMap((action: liveRequestAction.AcceptLiveRequestAction) =>
            this.liveRequestService.acceptLiveRequest$(action.liveRequest).map((data: Conversation) => {
                return new liveRequestAction.LiveRequestAcceptedAction(data);
            }))
        .catch((err: any) => {
            return of({ type: 'effect error: acceptLiveRequest$' });
        });

    @Effect()
    getLiveRequests$: Observable<Action> = this.actions$.ofType(liveRequestAction.LOAD_LIVE_REQUESTS)
        .switchMap((action: liveRequestAction.LoadLiveRequestsAction) =>
            this.liveRequestService.getLiveRequests$(action.group)
            .map((data: LiveRequest[]) => {
                return new liveRequestAction.LiveRequestsLoadedAction(data);
            })
            .catch((err: any) => {
                return of({ type: 'effect error: getLiveRequests$' });
            }));
}