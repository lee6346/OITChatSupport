import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Activity, Conversation } from 'botframework-directlinejs';

import * as chatBotActions from './chat-bot.actions';
import { DirectLineContext, DirectLineMessage, DirectLineSession, LiveRequest } from '../model';
import { DirectLineService } from '../core/direct-line.service';
import { LiveRequestService } from '../core/live-request.service';

@Injectable()
export class ChatBotEffects {
    constructor(
        private actions$: Actions,
        private liveRequestService: LiveRequestService,
        private directLineService: DirectLineService
    ) { }

    @Effect()
    makeLiveRequest$: Observable<Action> = this.actions$.ofType(chatBotActions.REQUEST_LIVE_SUPPORT)
        .map((action: chatBotActions.RequestLiveSupportAction) => {
            this.liveRequestService.sendLiveRequest$(action.request);
            return new chatBotActions.RequestLiveSupportCompleteAction(action.request);
        })
        .catch((err: any) => {
            console.log('error with live request');
            return of({ type: 'makeLiveRequest$' });
        });

    @Effect()
    getToken$: Observable<Action> = this.actions$.ofType(chatBotActions.GET_BOT_TOKEN)
        .switchMap((action: chatBotActions.GetBotTokenAction) =>
            this.directLineService.getToken$(action.botHandle)
                .map((conversation: Conversation) => {
                    return new chatBotActions.GetBotTokenCompleteAction(this.directLineService.startDirectLineSession(conversation));
                }))
        .catch((err: any) => {
            console.log('error starting a new session');
            return of({ type: 'getToken$' });
        });

    @Effect()
    postActivity$: Observable<Action> = this.actions$.ofType(chatBotActions.POST_DIRECT_LINE_ACTIVITY)
        .map((action: chatBotActions.PostDirectLineActivityAction) => {
            console.log('effect: new message is coming...');
            let activity = this.directLineService.postMessage(action.message);
            return new chatBotActions.PostDirectLineActivityCompleteAction(activity);
        })
        .catch((err: any) => {
            console.log('error sending message activity to bot');
            return of({ type: 'sendMessageActivity$' });
        });

    @Effect({ dispatch: false })
    endConnection$: Observable<Action> = this.actions$.ofType(chatBotActions.DIRECT_LINE_DISCONNECT)
        .map((action: chatBotActions.DirectLineDisconnectAction) => {
            this.directLineService.endConnection();
            return new chatBotActions.DirectLineDisconnectCompleteAction(action.conversationId);
        })
        .catch((err: any) => {
            console.log('error sending message activity to bot');
            return of({ type: 'endConnection$' });
        });
}

