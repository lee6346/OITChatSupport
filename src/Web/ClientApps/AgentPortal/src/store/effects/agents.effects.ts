import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as agentAction from '../action/agents.action';
import { Agent } from '../../shared/model/agent.model';
import { AgentGroupService } from '../../shared/services/agent-group.service';



@Injectable()
export class AgentsEffects {
    constructor(
        private actions$: Actions,
        private agentGroupService: AgentGroupService
    ) { }

    @Effect()
    joinGroup$: Observable<Action> = this.actions$.ofType(agentAction.JOIN_GROUP)
        .switchMap((action: agentAction.JoinGroupAction) => {
            this.agentGroupService.join(action.agent);
            return Observable.of(new agentAction.JoinGroupActionComplete(action.agent));
        });

    @Effect()
    leaveGroup$: Observable<Action> = this.actions$.ofType(agentAction.LEAVE_GROUP)
        .switchMap((action: agentAction.LeaveGroupAction) => {
            this.agentGroupService.leave(action.agent);
            return Observable.of(new agentAction.LeaveGroupActionComplete(action.agent));
        });

    @Effect()
    getAgentGroup$: Observable<Action> = this.actions$.ofType(agentAction.RETRIEVE_GROUP_AGENTS)
        .switchMap((action: agentAction.RetrieveGroupAgentsAction) =>
            this.agentGroupService.getAgentGroup$(action.agentId)
                .map((data: Agent[]) => {
                    return new agentAction.RetrieveGroupAgentsCompleteAction(data);
                })
                .catch((error: any) => {
                    return of({ type: 'getAgentGroups$' })
                })
        );



    
}