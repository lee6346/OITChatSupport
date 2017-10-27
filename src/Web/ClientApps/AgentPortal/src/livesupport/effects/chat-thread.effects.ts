import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Conversation } from 'botframework-directlinejs';
import {
    RemoveThreadAction, REMOVE_THREAD,
    ThreadRemovedAction, ThreadCreatedAction
} from '../actions/chat-thread.actions';
import { LiveRequestAcceptedAction, LIVE_REQUEST_ACCEPTED } from '../actions/live-request.actions';
import { LoadCachedMessagesAction } from '../actions/chat-message.actions';
import { DirectLineService } from '../services/directline.service';

@Injectable()
export class ChatThreadEffects {

    constructor(
        private actions$: Actions,
        private directLineService: DirectLineService
    ) { }

    @Effect()
    removeThread$: Observable<Action> = this.actions$.ofType(REMOVE_THREAD)
        .map((action: RemoveThreadAction) => {
            this.directLineService.removeConnection(action.threadId);
            return new ThreadRemovedAction(action.threadId);
        })
        .catch((err: any) => {
            return of({ type: 'effect error: removeThread$' });
        });

    @Effect()
    createThread$: Observable<Action> = this.actions$.ofType(LIVE_REQUEST_ACCEPTED)
        .map((action: LiveRequestAcceptedAction) => action.conversation).mergeMap((conversation: Conversation) => {
            return [
                new LoadCachedMessagesAction(conversation),
                new ThreadCreatedAction(this.directLineService.createDirectLineConnection(conversation))
            ];
        })
        .catch((err: any) => {
            return of({ type: 'effect error: createThread$' });
        });
}


