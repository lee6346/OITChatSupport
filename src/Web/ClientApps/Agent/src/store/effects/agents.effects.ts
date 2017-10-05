import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as agentAction from '../action/agents.action';
import { Agent } from '../../model';



@Injectable()
export class AgentsEffects {

    @Effect()
    joinGroup$: Observable<Action> = this.actions$.ofType(agentAction.JOIN_GROUP)
        .switchMap((action: agentAction.JoinGroupAction) => {
            return Observable.of(new agentAction.JoinGroupActionComplete(action.agent));
        });

    @Effect()
    leaveGroup$: Observable<Action> = this.actions$.ofType(agentAction.LEAVE_GROUP)
        .switchMap((action: agentAction.LeaveGroupAction) => {
            return Observable.of(new agentAction.LeaveGroupActionComplete(action.agent));
        });


    constructor(
        private actions$: Actions
    ) { }
}