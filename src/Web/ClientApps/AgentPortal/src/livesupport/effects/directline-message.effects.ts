import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Activity } from 'botframework-directlinejs';
import { CachedMessageLoad, DirectLineChatLoad } from '../models';

import * as directLineMessageActions from '../actions/directline-message.actions';
import { DirectLineService } from '../services/direct-line.service';

@Injectable()
export class DirectLineMessageEffects {

    constructor(
        private actions$: Actions,
        private directLineService: DirectLineService
    ) { }

    @Effect()
    sendMessageActivity$: Observable<Action> = this.actions$.ofType(directLineMessageActions.SEND_MESSAGE_ACTIVITY)
        .mergeMap((action: directLineMessageActions.SendMessageActivityAction) => 
            this.directLineService.sendMessage$(action.chatLoad).map((activity: Activity) => {
                return new directLineMessageActions.MessageActivitySentAction(activity);
        })
        .catch((err: any) => {
            return of({ type: 'effect error: sendMessageActivity$' });
        }));

    @Effect()
    getCachedActivities$: Observable<Action> = this.actions$.ofType(directLineMessageActions.LOAD_CACHED_MESSAGES)
        .switchMap((action: directLineMessageActions.LoadCachedMessagesAction) =>
            this.directLineService.getCachedActivities$(action.conversation)
                .map((activities: Activity[]) => {
                    let cachedLoad: CachedMessageLoad = { threadId: action.conversation.conversationId, cachedMessageSet: activities };
                    return new directLineMessageActions.CachedMessagesLoadedAction(cachedLoad);
                })
                .catch((err: any) => {
                    return of({ type: 'effect error: $getCachedActivities' });
                })
        );
}


