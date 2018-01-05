var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { REQUEST_AGENT_TRANSFER, AgentTransferRequestedAction, CANCEL_AGENT_TRANSFER, AgentTransferCanceledAction } from '../actions/agent-transfer.actions';
import { AgentTransferService } from '../services/agent-transfer.service';
var AgentTransferEffects = (function () {
    function AgentTransferEffects(actions$, agentTransferService) {
        var _this = this;
        this.actions$ = actions$;
        this.agentTransferService = agentTransferService;
        this.makeTransferRequest$ = this.actions$.ofType(REQUEST_AGENT_TRANSFER).pipe(map(function (action) {
            _this.agentTransferService.sendTransferRequest(action.request);
            return new AgentTransferRequestedAction();
        }))
            .catch(function (err) {
            return of({ type: 'effects error: makeTransferRequest$' });
        });
        this.cancelTransferRequest$ = this.actions$.ofType(CANCEL_AGENT_TRANSFER).pipe(map(function (action) {
            _this.agentTransferService.cancelTransferRequest(action.cancelRequest);
            return new AgentTransferCanceledAction();
        }))
            .catch(function (err) {
            return of({ type: 'effects error: cancelTransferRequest$' });
        });
    }
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], AgentTransferEffects.prototype, "makeTransferRequest$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], AgentTransferEffects.prototype, "cancelTransferRequest$", void 0);
    AgentTransferEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Actions,
            AgentTransferService])
    ], AgentTransferEffects);
    return AgentTransferEffects;
}());
export { AgentTransferEffects };
//# sourceMappingURL=agent-transfer.effects.js.map