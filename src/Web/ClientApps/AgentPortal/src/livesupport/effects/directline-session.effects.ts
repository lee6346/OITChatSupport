import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Activity } from 'botframework-directlinejs';

import * as directLineActions from '../actions/directline-session.actions';
import { DirectLineService } from '../services/direct-line.service';

@Injectable()
export class DirectLineEffects {

    constructor(
        private actions$: Actions,
        private directLineService: DirectLineService
    ) { }

    @Effect()
    sendMessageActivity$: Observable<Action> = this.actions$.ofType(directLineActions.SEND_SESSION_ACTIVITY)
        .map((action: directLineActions.SendSessionActivityAction) => {
            this.directLineService.sendMessage(action.chatLoad);
            return new directLineActions.SendSessionActivityCompleteAction(action.chatLoad.activity);
        })
        .catch((err: any) => {
            console.log('error sending message activity to bot');
            return of({ type: 'sendMessageActivity$' });
        });

    @Effect()
    getCachedActivities$: Observable<Action> = this.actions$.ofType(directLineActions.GET_CACHED_ACTIVITY)
        .switchMap((action: directLineActions.GetCachedActivityAction) => 
            this.directLineService.getCachedActivities$(action.conversationId)
            .map((activities: Activity[]) => {
                return new directLineActions.GetCachedActivityCompleteAction(activities);
            })
            .catch((err: any) => {
                console.log('error getting cached activities');
                return of({type: 'getCahedActivies'});
            })
        );

    @Effect()
    removeSession$: Observable<Action> = this.actions$.ofType(directLineActions.REMOVE_SESSION)
        .map((action: directLineActions.RemoveSessionAction) => {
            this.directLineService.removeConnection(action.removeLoad.connection);
            return new directLineActions.RemoveSessionComplete(action.removeLoad);
        })
        .catch((err: any) => {
            console.log('error removing a connection with student who left');
            return of({type: 'removesession$'});
        });
}



