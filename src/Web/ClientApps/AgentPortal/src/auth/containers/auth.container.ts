import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Auth } from '../models';
import { Observable } from 'rxjs/Observable';
import * as fromAuth from '../reducers';
import * as authActions from '../actions/auth.actions';

@Component({
    selector: 'agent-auth',
    template: `
        <login-form
        [authStatus]= authStatus$
        (submitLogin)="onSubmitLogin($event)">
        </login-form>
    `,
    styles: []
})
export class AuthContainer implements OnInit{

    authStatus$: Observable<boolean>;

    constructor(
        private store: Store<fromAuth.State>
    ) {
        this.authStatus$ = store.select(fromAuth.getLoggedIn);
    }

    ngOnInit() { }

    onSubmitLogin(auth: Auth) {
        this.store.dispatch(new authActions.LoginAction(auth));
    }
}