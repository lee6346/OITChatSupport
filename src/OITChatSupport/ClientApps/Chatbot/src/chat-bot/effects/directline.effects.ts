import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Activity, Conversation } from 'botframework-directlinejs';

import {
    SendMessageActivityAction,
    SEND_MESSAGE_ACTIVITY,
    MessageActivitySentAction
} from '../actions/directline-activity.actions';
import {
    RETRIEVE_CONNECTION_TOKEN,
    RetrieveConnectionTokenAction,
    ConnectionTokenRetrievedAction,
    EndChatConnectionAction,
    END_CHAT_CONNECTION,
    ChatConnectionEndedAction
} from '../actions/directline-connection.actions';
import { DirectLineService } from '../services/direct-line.service';

@Injectable()
export class DirectLineEffects {
    constructor(
        private actions$: Actions,
        private directLineService: DirectLineService
    ) { }

    @Effect()
    getToken$: Observable<Action> = this.actions$.ofType(RETRIEVE_CONNECTION_TOKEN)
        .switchMap((action: RetrieveConnectionTokenAction) =>
            this.directLineService.getToken$(action.botHandle)
                .map((conversation: Conversation) => {
                    return new ConnectionTokenRetrievedAction(this.directLineService.startDirectLineSession(conversation));
                }))
        .catch((err: any) => {
            return of({ type: 'effects error: getToken$' });
        });

    @Effect()
    postActivity$: Observable<Action> = this.actions$.ofType(SEND_MESSAGE_ACTIVITY)
        .map((action: SendMessageActivityAction) => {
            let activity = this.directLineService.postMessage(action.message);
            return new MessageActivitySentAction(activity);
        })
        .catch((err: any) => {
            return of({ type: 'effects error: sendMessageActivity$' });
        });

    @Effect({ dispatch: false })
    endConnection$: Observable<Action> = this.actions$.ofType(END_CHAT_CONNECTION)
        .map((action: EndChatConnectionAction) => {
            this.directLineService.endConnection(action.conversationId);
            return new ChatConnectionEndedAction(action.conversationId);
        })
        .catch((err: any) => {
            return of({ type: 'effects error: endConnection$' });
        });
}