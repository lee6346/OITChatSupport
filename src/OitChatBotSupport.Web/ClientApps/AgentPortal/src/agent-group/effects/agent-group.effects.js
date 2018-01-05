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
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import * as agentAction from '../actions/agent-group.actions';
import { AgentGroupService } from '../../core/agent-group.service';
var AgentGroupEffects = (function () {
    function AgentGroupEffects(actions$, agentGroupService) {
        var _this = this;
        this.actions$ = actions$;
        this.agentGroupService = agentGroupService;
        this.joinGroup$ = this.actions$.ofType(agentAction.JOIN_GROUP)
            .map(function (action) {
            _this.agentGroupService.join(action.agent);
            return new agentAction.JoinGroupCompleteAction(action.agent);
        })
            .catch(function (error) {
            return of({ type: 'effect error: joinGroup$' });
        });
        this.loadGroup$ = this.actions$.ofType(agentAction.LOAD_AGENTS)
            .switchMap(function (action) {
            return _this.agentGroupService.getAgents$(action.group).map(function (agents) {
                return new agentAction.LoadAgentsCompleteAction(agents);
            });
        })
            .catch(function (error) {
            return of({ type: 'effect error: loadGroup$' });
        });
        this.sendGroupMessage$ = this.actions$.ofType(agentAction.SEND_GROUP_MESSAGE)
            .map(function (action) {
            _this.agentGroupService.sendGroupMessage(action.agentMessage);
            return new agentAction.SendMessageCompleteAction(action.agentMessage);
        })
            .catch(function (error) {
            return of({ type: 'effect error: sendGroupsMessage$' });
        });
        this.getGroupMessages$ = this.actions$.ofType(agentAction.LOAD_GROUP_MESSAGES)
            .switchMap(function (action) {
            return _this.agentGroupService.getMessages$(action.group)
                .map(function (messages) {
                return new agentAction.LoadMessagesCompleteAction(messages);
            });
        })
            .catch(function (error) {
            return of({ type: 'effect error: getGroupMessages$' });
        });
    }
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], AgentGroupEffects.prototype, "joinGroup$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], AgentGroupEffects.prototype, "loadGroup$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], AgentGroupEffects.prototype, "sendGroupMessage$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], AgentGroupEffects.prototype, "getGroupMessages$", void 0);
    AgentGroupEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Actions,
            AgentGroupService])
    ], AgentGroupEffects);
    return AgentGroupEffects;
}());
export { AgentGroupEffects };
//# sourceMappingURL=agent-group.effects.js.map