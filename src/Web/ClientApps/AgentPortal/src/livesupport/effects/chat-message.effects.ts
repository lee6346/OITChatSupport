import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Activity } from 'botframework-directlinejs';
import { CachedMessageLoad } from '../models';
import {
    SendMessageActivityAction, SEND_MESSAGE_ACTIVITY,
    LoadCachedMessagesAction, LOAD_CACHED_MESSAGES,
    MessageActivitySentAction, CachedMessagesLoadedAction
} from '../actions/chat-message.actions';
import { DirectLineService } from '../services/directline.service';

@Injectable()
export class ChatMessageEffects {

    constructor(
        private actions$: Actions,
        private directLineService: DirectLineService
    ) { }

    @Effect()
    sendMessageActivity$: Observable<Action> = this.actions$.ofType(SEND_MESSAGE_ACTIVITY)
        .map((action: SendMessageActivityAction) => {
            return new MessageActivitySentAction(this.directLineService.sendMessage(action.chatLoad));
        })
        .catch((err: any) => {
            return of({ type: 'effect error: sendMessageActivity$' });
        });

    @Effect()
    getCachedActivities$: Observable<Action> = this.actions$.ofType(LOAD_CACHED_MESSAGES)
        .switchMap((action: LoadCachedMessagesAction) =>
            this.directLineService.getCachedActivities$(action.conversation)
            .map((activities: Activity[]) => {
                let cachedLoad: CachedMessageLoad = { threadId: action.conversation.conversationId, cachedMessageSet: activities };
                return new CachedMessagesLoadedAction(cachedLoad);
            })
            .catch((err: any) => {
                return of({ type: 'effect error: $getCachedActivities' });
            })
        );
}


