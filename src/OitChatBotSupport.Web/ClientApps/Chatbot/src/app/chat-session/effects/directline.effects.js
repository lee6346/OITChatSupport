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
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap } from 'rxjs/operators';
import { SEND_MESSAGE_ACTIVITY, MessageActivitySentAction } from '../actions/directline-activity.actions';
import { RETRIEVE_CONNECTION_TOKEN, ConnectionTokenRetrievedAction, END_CHAT_CONNECTION, ChatConnectionEndedAction } from '../actions/directline-connection.actions';
import { DirectLineService } from '../services/direct-line.service';
var DirectLineEffects = (function () {
    function DirectLineEffects(actions$, directLineService) {
        var _this = this;
        this.actions$ = actions$;
        this.directLineService = directLineService;
        this.getToken$ = this.actions$.ofType(RETRIEVE_CONNECTION_TOKEN).pipe(switchMap(function (action) {
            return _this.directLineService.getToken$()
                .map(function (conversation) {
                return new ConnectionTokenRetrievedAction(_this.directLineService.startDirectLineSession(conversation));
            });
        }))
            .catch(function (err) {
            return of({ type: 'effects error: getToken$' });
        });
        this.postActivity$ = this.actions$.ofType(SEND_MESSAGE_ACTIVITY).pipe(map(function (action) {
            var activity = _this.directLineService.postMessage(action.message);
            return new MessageActivitySentAction(activity);
        }))
            .catch(function (err) {
            return of({ type: 'effects error: sendMessageActivity$' });
        });
        this.endConnection$ = this.actions$.ofType(END_CHAT_CONNECTION).pipe(map(function (action) {
            _this.directLineService.endConnection(action.conversationId);
            return new ChatConnectionEndedAction(action.conversationId);
        }))
            .catch(function (err) {
            return of({ type: 'effects error: endConnection$' });
        });
    }
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DirectLineEffects.prototype, "getToken$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DirectLineEffects.prototype, "postActivity$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], DirectLineEffects.prototype, "endConnection$", void 0);
    DirectLineEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Actions,
            DirectLineService])
    ], DirectLineEffects);
    return DirectLineEffects;
}());
export { DirectLineEffects };
//# sourceMappingURL=directline.effects.js.map