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
import { HttpClient } from '@angular/common/http';
var AgentTransferService = (function () {
    function AgentTransferService(http) {
        this.http = http;
        this.transferRequestApi = 'http://localhost:5000/api/agentsupport/makerequest';
        this.cancelRequestApi = 'http://localhost:5000/api/agentsupport/cancelrequest';
    }
    AgentTransferService.prototype.sendTransferRequest = function (transfer) {
        this.http.post(this.transferRequestApi, transfer)
            .subscribe(function (next) { return console.log(next); });
    };
    AgentTransferService.prototype.cancelTransferRequest = function (cancel) {
        this.http.post(this.cancelRequestApi, cancel)
            .subscribe(function (next) { return console.log(next); });
    };
    AgentTransferService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], AgentTransferService);
    return AgentTransferService;
}());
export { AgentTransferService };
//# sourceMappingURL=agent-transfer.service.js.map