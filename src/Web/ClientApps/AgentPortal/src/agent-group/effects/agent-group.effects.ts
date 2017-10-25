import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as agentAction from '../actions/agent-group.actions';
import { Agent, AgentMessage } from '../models';
import { AgentGroupService } from '../../shared/agent-group.service';


@Injectable()
export class AgentGroupEffects {
    constructor(
        private actions$: Actions,
        private agentGroupService: AgentGroupService,
    ) { }

    @Effect()
    joinGroup$: Observable<Action> = this.actions$.ofType(agentAction.JOIN_GROUP)
        .map((action: agentAction.JoinGroupAction) => {
            this.agentGroupService.join(action.agent);
            return new agentAction.JoinGroupCompleteAction(action.agent);
        })
        .catch((error: any) => {
            return of({ type: 'effect error: joinGroup$' });
        });

    @Effect()
    loadGroup$: Observable<Action> = this.actions$.ofType(agentAction.LOAD_AGENTS)
        .switchMap((action: agentAction.LoadAgentsAction) =>
            this.agentGroupService.getAgents$(action.group).map((agents: Agent[]) => {
            return new agentAction.LoadAgentsCompleteAction(agents);
        }))
        .catch((error: any) => {
            return of({ type: 'effect error: loadGroup$' })
        });

    @Effect()
    sendGroupMessage$: Observable<Action> = this.actions$.ofType(agentAction.SEND_GROUP_MESSAGE)
        .map((action: agentAction.SendGroupMessageAction) => {
            this.agentGroupService.sendGroupMessage(action.agentMessage);
            return new agentAction.SendMessageCompleteAction(action.agentMessage);
        })
        .catch((error: any) => {
            return of({ type: 'effect error: sendGroupsMessage$' })
        });

    @Effect()
    getGroupMessages$: Observable<Action> = this.actions$.ofType(agentAction.LOAD_GROUP_MESSAGES)
        .switchMap((action: agentAction.LoadGroupMessagesAction) =>
        this.agentGroupService.getMessages$(action.group)
        .map((messages: AgentMessage[]) => {
            return new agentAction.LoadMessagesCompleteAction(messages)
        }))
        .catch((error: any) => {
            return of({ type: 'effect error: getGroupMessages$' })
        });
}