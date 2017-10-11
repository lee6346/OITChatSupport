
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as directLineActions from '../action/direct-line.action';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { DirectLineService } from '../../shared/services/direct-line.service';
import { DirectLineConnection, DirectLineThread } from '../../shared/model';
import { Activity, DirectLine } from 'botframework-directlinejs';

@Injectable()
export class DirectLineEffects{

    constructor(
        private actions$: Actions,
        private directLineService: DirectLineService

    ) { }


    @Effect()
    getConnectionToken$: Observable<Action> = this.actions$.ofType(directLineActions.GET_CONNECTION_THREAD)
        .switchMap((action: directLineActions.GetConnectionThreadAction) =>
            this.directLineService.getThreadToken$(action.conversationId)
                .map((data: DirectLineConnection) => {
                    return new directLineActions
                        .GetConnectionThreadCompleteAction(this.directLineService.createThread(data));
                })
                .catch((err: any) => {
                    return of({ type: 'getConnectionToken$' });
                })
    );



    @Effect()
    sendMessageActivity$: Observable<Action> = this.actions$.ofType(directLineActions.SEND_MESSAGE_ACTIVITY)
        .switchMap((action: directLineActions.SendMessageActivityAction) => {
            this.directLineService.sendMessage$(action.directLineThread.directLineSocket, action.activity);
            return Observable.of(new directLineActions.SendMessageActivityCompleteAction(action.activity));
        })
        .catch((err: any) => {
            return of({ type: 'sendMessageActivity$' });

        });
    

    

}