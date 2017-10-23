import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Activity, Conversation } from 'botframework-directlinejs';

import * as directLineThreadActions from '../actions/directline-thread.actions';
import { LiveRequestAcceptedAction, LIVE_REQUEST_ACCEPTED } from '../actions/live-request.actions';
import { LOAD_CACHED_MESSAGES, LoadCachedMessagesAction } from '../actions/directline-message.actions';
import { DirectLineService } from '../services/direct-line.service';

@Injectable()
export class DirectLineThreadEffects {

    constructor(
        private actions$: Actions,
        private directLineService: DirectLineService
    ) { }

    @Effect()
    removeSession$: Observable<Action> = this.actions$.ofType(directLineThreadActions.REMOVE_THREAD)
        .map((action: directLineThreadActions.RemoveThreadAction) => {
            console.log('effect: about to end a direct line connection');
            this.directLineService.removeConnection(action.removeLoad.connection);
            return new directLineThreadActions.ThreadRemovedAction(action.removeLoad.threadId);
        })
        .catch((err: any) => {
            return of({ type: 'effect error: removesession$' });
        });

    @Effect()
    createThread$: Observable<Action> = this.actions$.ofType(LIVE_REQUEST_ACCEPTED)
        .map((action: LiveRequestAcceptedAction) => action.conversation).mergeMap((conversation: Conversation)=> {
            return [
                new LoadCachedMessagesAction(conversation),
                new directLineThreadActions.ThreadCreatedAction(this.directLineService.createDirectLineThread(conversation))
            ];
        })
        .catch((err: any) => {
            return of({ type: 'effect error: createThread$' });
        });
}


