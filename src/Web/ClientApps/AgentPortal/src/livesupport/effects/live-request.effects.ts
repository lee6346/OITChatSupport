import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {
    AcceptLiveRequestAction, ACCEPT_LIVE_REQUEST,
    LoadLiveRequestsAction, LOAD_LIVE_REQUESTS,
    LiveRequestAcceptedAction, LiveRequestsLoadedAction
} from '../actions/live-request.actions';
import { LiveRequest } from '../models';
import { LiveRequestService } from '../services/live-request.service';
import { Conversation } from 'botframework-directlinejs';

@Injectable()
export class LiveRequestEffects {
    constructor(
        private actions$: Actions,
        private liveRequestService: LiveRequestService
    ) { }

    @Effect()
    acceptLiveRequest$: Observable<Action> = this.actions$
        .ofType(ACCEPT_LIVE_REQUEST).mergeMap((action: AcceptLiveRequestAction) =>
            this.liveRequestService.acceptLiveRequest$(action.liveRequest).map((data: Conversation) => {
                return new LiveRequestAcceptedAction(data);
            }))
        .catch((err: any) => {
            return of({ type: 'effect error: acceptLiveRequest$' });
        });

    @Effect()
    getLiveRequests$: Observable<Action> = this.actions$.ofType(LOAD_LIVE_REQUESTS)
        .switchMap((action: LoadLiveRequestsAction) =>
            this.liveRequestService.getLiveRequests$(action.group)
            .map((data: LiveRequest[]) => {
                return new LiveRequestsLoadedAction(data);
            })
            .catch((err: any) => {
                return of({ type: 'effect error: getLiveRequests$' });
            }));
}