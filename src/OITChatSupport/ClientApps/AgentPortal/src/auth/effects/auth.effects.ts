import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Auth, User } from '../models';
import { AuthService } from '../services/auth.service';
import * as authActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects{

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }

    @Effect()
    login$: Observable<Action> = this.actions$.ofType(authActions.LOGIN)
        .map((action: authActions.LoginAction) => action.auth)
        .exhaustMap((auth: Auth) => this.authService.authenticate(auth)
            .map(res => new authActions.LoginApprovedAction(res)))
        .catch((err: any) => {
            return of(new authActions.LoginDeniedAction(err));
        });

    @Effect({ dispatch: false })
    loginApproved$: Observable<Action> = this.actions$.ofType(authActions.LOGIN_APPROVED)
        .do(() => this.router.navigate(['/']));
}