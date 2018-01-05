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
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AuthService } from '../services/auth.service';
import * as authActions from '../actions/auth.actions';
var AuthEffects = (function () {
    function AuthEffects(actions$, authService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.login$ = this.actions$.ofType(authActions.LOGIN)
            .map(function (action) { return action.auth; })
            .exhaustMap(function (auth) { return _this.authService.authenticate(auth)
            .map(function (res) { return new authActions.LoginApprovedAction(res); }); })
            .catch(function (err) {
            return of(new authActions.LoginDeniedAction(err));
        });
        this.loginApproved$ = this.actions$.ofType(authActions.LOGIN_APPROVED)
            .do(function () { return _this.router.navigate(['/']); });
    }
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], AuthEffects.prototype, "login$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], AuthEffects.prototype, "loginApproved$", void 0);
    AuthEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Actions,
            AuthService,
            Router])
    ], AuthEffects);
    return AuthEffects;
}());
export { AuthEffects };
//# sourceMappingURL=auth.effects.js.map