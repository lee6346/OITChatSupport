import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import * as  agentTransfer from '../actions/agent-transfer.actions';
import { TransferRequest } from '../models';
import { AgentTransferService } from '../services/agent-transfer.service';


@Injectable()
export class AgentTransferEffects {
    constructor(
        private actions$: Actions,
        private agentTransferService: AgentTransferService
    ) { }

    @Effect()
    makeTransferRequest$: Observable<Action> = this.actions$.ofType<agentTransfer.RequestAgentTransferAction>(agentTransfer.REQUEST_AGENT_TRANSFER).pipe(
        map((action: agentTransfer.RequestAgentTransferAction) => {
            this.agentTransferService.sendTransferRequest(action.request);
            return new agentTransfer.AgentTransferRequestedAction();
        }))
        .catch((err: any) => {
            return of({ type: 'effects error: makeTransferRequest$' });
        });

    @Effect()
    cancelTransferRequest$: Observable<Action> = this.actions$.ofType<agentTransfer.CancelAgentTransferAction>(agentTransfer.CANCEL_AGENT_TRANSFER).pipe(
        map((action: agentTransfer.CancelAgentTransferAction) => {
            this.agentTransferService.cancelTransferRequest(action.cancelRequest);
            return new agentTransfer.AgentTransferCanceledAction();
        }))
        .catch((err: any) => {
            return of({ type: 'effects error: cancelTransferRequest$' });
        });
}