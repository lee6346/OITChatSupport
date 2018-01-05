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
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
var AuthService = (function () {
    function AuthService() {
        this.agentIds = ['jvr632', 'jlm555', 'abr444'];
    }
    AuthService.prototype.authenticate = function (auth) {
        if (this.agentIds.findIndex(function (agents) { return agents === auth.username; }) === -1) {
            return _throw("Invalid username");
        }
        return of(auth.username);
    };
    AuthService.prototype.logout = function () {
        return of(true);
    };
    AuthService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map