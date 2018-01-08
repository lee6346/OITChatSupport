import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { map, switchMap } from 'rxjs/operators';

import * as agentAction from '../actions/agent-group.actions';
import { Agent } from '../models';
import { AgentGroupService } from '../services/agent-group.service';


@Injectable()
export class AgentGroupEffects {
    constructor(
        private actions$: Actions,
        private agentGroupService: AgentGroupService,
    ) { }

    @Effect()
    joinGroup$: Observable<Action> = this.actions$.ofType<agentAction.JoinAgentGroupAction>(agentAction.JOIN_AGENT_GROUP).pipe(
        map((action: agentAction.JoinAgentGroupAction) => {
            this.agentGroupService.join(action.agent);
            return new agentAction.AgentGroupJoinedAction();
        }))
        .catch((error: any) => {
            return of({ type: 'effect error: joinGroup$' });
        });

    @Effect()
    loadGroup$: Observable<Action> = this.actions$.ofType<agentAction.LoadAgentGroupAction>(agentAction.LOAD_AGENT_GROUP).pipe(
        switchMap((action: agentAction.LoadAgentGroupAction) =>
            this.agentGroupService.getAgents$()
                .map((agents: Agent[]) => {
            return new agentAction.AgentGroupLoadedAction(agents);
        })))
        .catch((error: any) => {
            return of({ type: 'effect error: loadGroup$' })
        });
}