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
import { Store } from '@ngrx/store';
import { HubConnection } from '@aspnet/signalr-client';
import { ReceivedJoinedAgentAction, ReceivedLeftAgentAction, ReceiveGroupMessageAction } from '../agent-group/actions/agent-group.actions';
import { LiveRequestReceivedAction, LiveRequestRemovedAction } from '../livesupport/actions/live-request.actions';
var AgentHubGateway = (function () {
    function AgentHubGateway(store) {
        this.store = store;
        this.init();
    }
    AgentHubGateway.prototype.send = function (message) {
        this._hubConnection.invoke('Send', message);
    };
    AgentHubGateway.prototype.joinGroup = function (agent) {
        this._hubConnection.invoke('JoinGroup', agent);
        console.log('successfully joined group');
    };
    AgentHubGateway.prototype.leaveGroup = function (agent) {
        this._hubConnection.invoke('LeaveGroup', agent);
    };
    AgentHubGateway.prototype.init = function () {
        var _this = this;
        this._hubConnection = new HubConnection('/agent');
        this._hubConnection.on('JoinGroup', function (agent) {
            console.log('joining group');
            _this.store.dispatch(new ReceivedJoinedAgentAction(agent));
        });
        this._hubConnection.on('LeaveGroup', function (agent) {
            console.log('leaving group');
            _this.store.dispatch(new ReceivedLeftAgentAction(agent));
        });
        this._hubConnection.on('Send', function (message) {
            console.log('Send message invoked');
            _this.store.dispatch(new ReceiveGroupMessageAction(message));
        });
        this._hubConnection.on('LiveTransfer', function (liveRequest) {
            console.log('live transfer requested');
            _this.store.dispatch(new LiveRequestReceivedAction(liveRequest));
        });
        this._hubConnection.on('RemoveTransferRequest', function (removeRequest) {
            console.log('remove request');
            _this.store.dispatch(new LiveRequestRemovedAction(removeRequest));
        });
        this._hubConnection.start()
            .then(function () {
            var x = {};
            x.agentId = 'jvr632';
            x.botHandle = 'AskRowdy';
            x.connected = true;
            _this.joinGroup(x);
            console.log('Hub connection started');
        })
            .catch(function (err) {
            console.log('Error while establishing connection');
        });
    };
    AgentHubGateway = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Store])
    ], AgentHubGateway);
    return AgentHubGateway;
}());
export { AgentHubGateway };
//# sourceMappingURL=agent.hub.gateway.js.map