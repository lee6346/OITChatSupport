import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Activity, Conversation } from 'botframework-directlinejs';
import * as directLineConnection from '../actions/directline-connection.actions';
import * as directLineActivity from '../actions/directline-activity.actions';

import { DirectLineService } from '../services/direct-line.service';

@Injectable()
export class DirectLineEffects {
    constructor(
        private actions$: Actions,
        private directLineService: DirectLineService
    ) { }

    @Effect()
    getToken$: Observable<Action> = this.actions$.ofType(directLineConnection.RETRIEVE_BOT_TOKEN)
        .switchMap((action: directLineConnection.RetrieveBotTokenAction) =>
            this.directLineService.getToken$(action.botHandle)
                .map((conversation: Conversation) => {
                    return new directLineConnection.BotTokenRetrievedAction(this.directLineService.startDirectLineSession(conversation));
                }))
        .catch((err: any) => {
            return of({ type: 'effects error: getToken$' });
        });

    @Effect()
    postActivity$: Observable<Action> = this.actions$.ofType(directLineActivity.SEND_MESSAGE_ACTIVITY)
        .map((action: directLineActivity.SendMessageActivityAction) => {
            let activity = this.directLineService.postMessage(action.message);
            return new directLineActivity.MessageActivitySentAction(activity);
        })
        .catch((err: any) => {
            return of({ type: 'effects error: sendMessageActivity$' });
        });

    @Effect({ dispatch: false })
    endConnection$: Observable<Action> = this.actions$.ofType(directLineConnection.END_CHAT_SESSION)
        .map((action: directLineConnection.EndChatSessionAction) => {
            this.directLineService.endConnection(action.conversationId);
            return new directLineConnection.ChatSessionEndedAction(action.conversationId);
        })
        .catch((err: any) => {
            return of({ type: 'effects error: endConnection$' });
        });
}