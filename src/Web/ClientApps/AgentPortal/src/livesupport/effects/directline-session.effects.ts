import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Activity, DirectLine } from 'botframework-directlinejs';

import * as directLineActions from '../actions/directline-session.actions';
import * as liveRequestAction from '../actions/live-request.actions';

import { DirectLineService } from '../../shared/services/direct-line.service';
import { DirectLineThread, DirectLineMessageLoad } from '../../shared/model';

@Injectable()
export class DirectLineEffects {

    constructor(
        private actions$: Actions,
        private directLineService: DirectLineService
    ) { }

    @Effect()
    getConnectionToken$: Observable<Action> = this.actions$.ofType(directLineActions.GET_CONNECTION_THREAD)
        .switchMap((action: directLineActions.GetConnectionThreadAction) =>
            this.directLineService.createDirectLineConnection(action.conversationId)
                .map((data: DirectLineThread) => {
                    return new directLineActions.GetConnectionThreadCompleteAction(data);
                })
                .catch((err: any) => {
                    console.log('error getting the connection token...');
                    return of({ type: 'getConnectionToken$' });
                })
        );

    @Effect()
    sendMessageActivity$: Observable<Action> = this.actions$.ofType(directLineActions.SEND_MESSAGE_ACTIVITY)
        .switchMap((action: directLineActions.SendMessageActivityAction) => {
            this.directLineService.sendMessage(action.directLineMessageLoad);
            return Observable.of(
                new directLineActions.SendMessageActivityCompleteAction(action.directLineMessageLoad.message));
        })
        .catch((err: any) => {
            console.log('error sending message activity to bot');
            return of({ type: 'sendMessageActivity$' });

        });




}