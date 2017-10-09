
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as directLineActions from '../action/direct-line.action';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { DirectLineGateway } from '../../shared/gateway/direct-line.gateway';
import { DirectLineConnection } from '../../shared/model/directline-connection.model';
import { Activity, DirectLine } from 'botframework-directlinejs';
@Injectable()
export class DirectLineEffects{

    constructor(
        private actions$: Actions,
        private directLineGateway: DirectLineGateway

    ) { }


    @Effect()
    getConnectionToken$: Observable<Action> = this.actions$.ofType(directLineActions.GET_CONNECTION_TOKEN)
        .switchMap((action: directLineActions.GetConnectionTokenAction) =>
            this.directLineGateway.getNewConnection$(action.conversationId)
                .map((data: DirectLineConnection) => {
                    return new directLineActions.GetConnectionTokenCompleteAction(data);
                })
                .catch((err: any) => {
                    return of({ type: 'getConnectionToken$' });
                })
    );

    @Effect()
    openConnectionStream$: Observable<Action> = this.actions$.ofType(directLineActions.GET_CONNECTION_TOKEN_COMPLETE)
        .mergeMap((action: directLineActions.GetConnectionTokenCompleteAction) =>
            new DirectLine({
                conversationId: action.directLineConnection.conversationId,
                token: action.directLineConnection.token,
                streamUrl: action.directLineConnection.streamUrl
            }).activity$
        );
}