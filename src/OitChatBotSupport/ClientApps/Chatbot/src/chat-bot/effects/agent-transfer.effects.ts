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
    CANCEL_AGENT_TRANSFER,
    CancelAgentTransferAction,
    AgentTransferCanceledAction
} from '../actions/agent-transfer.actions';
import { TransferRequest } from '../models';
import { AgentTransferService } from '../services/agent-transfer.service';


/**
 * Handles NGRX side effects for making agent transfer requests
 */
@Injectable()
export class AgentTransferEffects {
    constructor(
        private actions$: Actions,
        private agentTransferService: AgentTransferService
    ) { }

    /**
     * Intercepts the {@link RequestAgentTransferAction} to retrieve a connection token via {@link AgentTransferService}
     *
     * Then dispatches the new {@link AgentTransferRequestedAction} to update the store
     */
    @Effect()
    makeTransferRequest$: Observable<Action> = this.actions$.ofType(REQUEST_AGENT_TRANSFER)
        .map((action: RequestAgentTransferAction) => {
            this.agentTransferService.sendTransferRequest(action.request);
            return new AgentTransferRequestedAction();
        })
        .catch((err: any) => {
            return of({ type: 'effects error: makeTransferRequest$' });
        });

    @Effect()
    cancelTransferRequest$: Observable<Action> = this.actions$.ofType(CANCEL_AGENT_TRANSFER)
        .map((action: CancelAgentTransferAction) => {
            this.agentTransferService.cancelTransferRequest(action.cancelRequest);
            return new AgentTransferCanceledAction();
        })
        .catch((err: any) => {
            return of({ type: 'effects error: cancelTransferRequest$' });
        });
}