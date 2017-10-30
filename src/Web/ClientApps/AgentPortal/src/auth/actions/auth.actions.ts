
import { Action } from '@ngrx/store';
import { User, Auth } from '../models';

export const LOGIN = '[Auth] LOGIN';
export const LOGIN_APPROVED = '[Auth] LOGIN_APPROVED';
export const LOGIN_DENIED = '[Auth] LOGIN_DENIED';
export const LOGOUT = '[Auth] LOGOUT';

export class LoginAction implements Action {
    readonly type = LOGIN;
    constructor(public auth: Auth) { }

}

export class LoginApprovedAction implements Action{
    readonly type = LOGIN_APPROVED;
    constructor(public user: string) { }
}

export class LoginDeniedAction implements Action {
    readonly type = LOGIN_DENIED;
    constructor(public response: any) { }
}

export class LogoutAction implements Action {
    readonly type = LOGOUT;
    constructor() { }
}

export type Actions
    = LoginAction
    | LoginApprovedAction
    | LoginDeniedAction
    | LogoutAction;