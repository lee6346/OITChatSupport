import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import * as liveRequest from '../actions/live-request.actions';
import { LiveRequest } from '../models';
import { LiveRequestService } from '../services/live-request.service';

@Injectable()
export class LiveRequestEffects {
    constructor(
        private actions$: Actions,
        private liveRequestService: LiveRequestService
    ) { }

    @Effect()
    makeLiveRequest$: Observable<Action> = this.actions$.ofType(liveRequest.REQUEST_LIVE_SUPPORT)
        .map((action: liveRequest.RequestLiveSupportAction) => {
            this.liveRequestService.sendLiveRequest$(action.request);
            return new liveRequest.LiveSupportRequestedAction(action.request);
        })
        .catch((err: any) => {
            return of({ type: 'effects error: makeLiveRequest$' });
        });
}