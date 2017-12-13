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


/**
 * Handles NGRX side effects necessary to make calls to the direct line channel
 */
@Injectable()
export class DirectLineEffects {
    constructor(
        private actions$: Actions,
        private directLineService: DirectLineService
    ) { }

    /**
     * Intercepts the {@link RetrieveConnectionTokenAction} to retrieve a connection token via {@link DirectLineService}
     *
     * Then dispatches the new {@link ConnectionTokenRetrievedAction} to update the store
     */
    @Effect()
    getToken$: Observable<Action> = this.actions$.ofType(RETRIEVE_CONNECTION_TOKEN)
        .switchMap((action: RetrieveConnectionTokenAction) =>
            this.directLineService.getToken$()
                .map((conversation: Conversation) => {
                    return new ConnectionTokenRetrievedAction(this.directLineService.startDirectLineSession(conversation));
                }))
        .catch((err: any) => {
            return of({ type: 'effects error: getToken$' });
        });

    /**
     * Intercepts the {@link SendMessageActivityAction} to post the message via {@link DirectLineService}
     *
     * Then dispatches the new {@link MessageActivitySentAction} to update the store
     */
    @Effect()
    postActivity$: Observable<Action> = this.actions$.ofType(SEND_MESSAGE_ACTIVITY)
        .map((action: SendMessageActivityAction) => {
            let activity = this.directLineService.postMessage(action.message);
            return new MessageActivitySentAction(activity);
        })
        .catch((err: any) => {
            return of({ type: 'effects error: sendMessageActivity$' });
        });

    /**
     * Intercepts the {@link EndChatConnectionAction} to end the connection via {@link DirectLineService}
     *
     * Then dispatches the new {@link ChatConnectionEndedAction} to clear the store
     */
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