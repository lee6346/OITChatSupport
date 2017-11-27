import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import {
    REQUEST_AGENT_TRANSFER,
    RequestAgentTransferAction,
    AgentTransferRequestedAction,
} from '../actions/agent-transfer.actions';
import { TransferRequest } from '../models';
import { AgentTransferService } from '../services/agent-transfer.service';

@Injectable()
export class AgentTransferEffects {
    constructor(
        private actions$: Actions,
        private agentTransferService: AgentTransferService
    ) { }

    @Effect()
    makeTransferRequest$: Observable<Action> = this.actions$.ofType(REQUEST_AGENT_TRANSFER)
        .map((action: RequestAgentTransferAction) => {
            this.agentTransferService.sendTransferRequest(action.request);
            return new AgentTransferRequestedAction();
        })
        .catch((err: any) => {
            return of({ type: 'effects error: makeTransferRequest$' });
        });
}