var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../reducers';
import * as authActions from '../actions/auth.actions';
var AuthContainer = (function () {
    function AuthContainer(store) {
        this.store = store;
        this.authStatus$ = store.select(fromAuth.getLoggedIn);
    }
    AuthContainer.prototype.ngOnInit = function () { };
    AuthContainer.prototype.onSubmitLogin = function (auth) {
        this.store.dispatch(new authActions.LoginAction(auth));
    };
    AuthContainer = __decorate([
        Component({
            selector: 'agent-auth',
            template: "\n        <login-form\n        [authStatus]= authStatus$\n        (submitLogin)=\"onSubmitLogin($event)\">\n        </login-form>\n    ",
            styles: []
        }),
        __metadata("design:paramtypes", [Store])
    ], AuthContainer);
    return AuthContainer;
}());
export { AuthContainer };
//# sourceMappingURL=auth.container.js.map