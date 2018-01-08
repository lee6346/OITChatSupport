import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap } from 'rxjs/operators';
import { Activity, Conversation } from 'botframework-directlinejs';

import * as directLine from '../actions/direct-line.actions';
import { DirectLineService } from '../services/direct-line.service';


@Injectable()
export class DirectLineEffects {
    constructor(
        private actions$: Actions,
        private directLineService: DirectLineService
    ) { }

    @Effect()
    getToken$: Observable<Action> = this.actions$.ofType<directLine.RetrieveConnectionTokenAction>(directLine.RETRIEVE_CONNECTION_TOKEN).pipe(
        switchMap((action: directLine.RetrieveConnectionTokenAction) =>
            this.directLineService.getToken$()
                .map((conversation: Conversation) => {
                    return new directLine.ConnectionTokenRetrievedAction(this.directLineService.startDirectLineSession(conversation));
                })))
        .catch((err: any) => {
            return of({ type: 'effects error: getToken$' });
        });

    @Effect()
    postActivity$: Observable<Action> = this.actions$.ofType<directLine.SendMessageActivityAction>(directLine.SEND_MESSAGE_ACTIVITY).pipe(
        map((action: directLine.SendMessageActivityAction) => {
            let activity = this.directLineService.postMessage(action.message);
            return new directLine.MessageActivitySentAction(activity);
        }))
        .catch((err: any) => {
            return of({ type: 'effects error: sendMessageActivity$' });
        });
}