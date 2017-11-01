import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Activity, Conversation } from 'botframework-directlinejs';

import * as chatBotActions from './chat-bot.actions';
import { DirectLineMessage, LiveRequest } from '../models';
import { DirectLineService } from '../../core/direct-line.service';
import { LiveRequestService } from '../../core/live-request.service';

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
            return new chatBotActions.LiveSupportRequestedAction(action.request);
        })
        .catch((err: any) => {
            return of({ type: 'effects error: makeLiveRequest$' });
        });

    @Effect()
    getToken$: Observable<Action> = this.actions$.ofType(chatBotActions.RETRIEVE_BOT_TOKEN)
        .switchMap((action: chatBotActions.RetrieveBotTokenAction) =>
            this.directLineService.getToken$(action.botHandle)
                .map((conversation: Conversation) => {
                    return new chatBotActions.BotTokenRetrievedAction(this.directLineService.startDirectLineSession(conversation));
                }))
        .catch((err: any) => {
            return of({ type: 'effects error: getToken$' });
        });

    @Effect()
    postActivity$: Observable<Action> = this.actions$.ofType(chatBotActions.SEND_MESSAGE_ACTIVITY)
        .map((action: chatBotActions.SendMessageActivityAction) => {
            let activity = this.directLineService.postMessage(action.message);
            return new chatBotActions.MessageActivitySentAction(activity);
        })
        .catch((err: any) => {
            return of({ type: 'effects error: sendMessageActivity$' });
        });

    @Effect({ dispatch: false })
    endConnection$: Observable<Action> = this.actions$.ofType(chatBotActions.END_CHAT_SESSION)
        .map((action: chatBotActions.EndChatSessionAction) => {
            this.directLineService.endConnection(action.conversationId);
            return new chatBotActions.ChatSessionEndedAction(action.conversationId);
        })
        .catch((err: any) => {
            return of({ type: 'effects error: endConnection$' });
        });
}

