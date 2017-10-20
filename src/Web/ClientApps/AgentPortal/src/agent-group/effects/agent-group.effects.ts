import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as agentAction from '../actions/agent-group.actions';
import { Agent } from '../models/agent.model';
import { AgentGroupService } from '../../shared/services/agent-group.service';


@Injectable()
export class AgentGroupEffects {
    constructor(
        private actions$: Actions,
        private agentGroupService: AgentGroupService
    ) { }

    @Effect()
    joinGroup$: Observable<Action> = this.actions$.ofType(agentAction.JOIN_GROUP)
        .switchMap((action: agentAction.JoinGroupAction) => {
            this.agentGroupService.join(action.agent);
            return Observable.of(new agentAction.JoinGroupActionComplete(action.agent));
        })
        .catch((error: any) => {
            console.log('error in joining group for agent effects');
            return of({ type: 'joinGroup$' });
        });


    @Effect()
    leaveGroup$: Observable<Action> = this.actions$.ofType(agentAction.LEAVE_GROUP)
        .switchMap((action: agentAction.LeaveGroupAction) => {
            this.agentGroupService.leave(action.agent);
            return Observable.of(new agentAction.LeaveGroupActionComplete(action.agent));
        })
        .catch((error: any) => {
            console.log('error in agent effects for leaving the group');
            return of({ type: 'leaveAgentGroup$' })
        });

    @Effect()
    getAgentGroup$: Observable<Action> = this.actions$.ofType(agentAction.RETRIEVE_GROUP_AGENTS)
        .switchMap((action: agentAction.RetrieveGroupAgentsAction) =>
            this.agentGroupService.getAgents$(action.agentId)
                .map((data: Agent[]) => {
                    console.log('getting some of the agents');
                    return new agentAction.RetrieveGroupAgentsCompleteAction(data);
                })
                .catch((error: any) => {
                    console.log('error in agent effects for get agent group');
                    return of({ type: 'getAgentGroups$' })
                })
        );




}