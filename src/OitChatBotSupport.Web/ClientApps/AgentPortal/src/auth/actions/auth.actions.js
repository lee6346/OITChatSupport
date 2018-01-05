export var LOGIN = '[Auth] LOGIN';
export var LOGIN_APPROVED = '[Auth] LOGIN_APPROVED';
export var LOGIN_DENIED = '[Auth] LOGIN_DENIED';
export var LOGOUT = '[Auth] LOGOUT';
var LoginAction = (function () {
    function LoginAction(auth) {
        this.auth = auth;
        this.type = LOGIN;
    }
    return LoginAction;
}());
export { LoginAction };
var LoginApprovedAction = (function () {
    function LoginApprovedAction(user) {
        this.user = user;
        this.type = LOGIN_APPROVED;
    }
    return LoginApprovedAction;
}());
export { LoginApprovedAction };
var LoginDeniedAction = (function () {
    function LoginDeniedAction(response) {
        this.response = response;
        this.type = LOGIN_DENIED;
    }
    return LoginDeniedAction;
}());
export { LoginDeniedAction };
var LogoutAction = (function () {
    function LogoutAction() {
        this.type = LOGOUT;
    }
    return LogoutAction;
}());
export { LogoutAction };
//# sourceMappingURL=auth.actions.js.map