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
import { REMOVE_THREAD, ThreadRemovedAction, ThreadCreatedAction } from '../actions/chat-thread.actions';
import { LIVE_REQUEST_ACCEPTED } from '../actions/live-request.actions';
import { LoadCachedMessagesAction } from '../actions/chat-message.actions';
import { DirectLineService } from '../services/directline.service';
var ChatThreadEffects = (function () {
    function ChatThreadEffects(actions$, directLineService) {
        var _this = this;
        this.actions$ = actions$;
        this.directLineService = directLineService;
        this.removeThread$ = this.actions$.ofType(REMOVE_THREAD)
            .map(function (action) {
            _this.directLineService.removeConnection(action.threadId);
            return new ThreadRemovedAction(action.threadId);
        })
            .catch(function (err) {
            return of({ type: 'effect error: removeThread$' });
        });
        this.createThread$ = this.actions$.ofType(LIVE_REQUEST_ACCEPTED)
            .mergeMap(function (action) {
            return [
                new LoadCachedMessagesAction(action.conversation),
                new ThreadCreatedAction(_this.directLineService.createDirectLineConnection(action.conversation, action.bot))
            ];
        })
            .catch(function (err) {
            return of({ type: 'effect error: createThread$' });
        });
    }
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ChatThreadEffects.prototype, "removeThread$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ChatThreadEffects.prototype, "createThread$", void 0);
    ChatThreadEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Actions,
            DirectLineService])
    ], ChatThreadEffects);
    return ChatThreadEffects;
}());
export { ChatThreadEffects };
//# sourceMappingURL=chat-thread.effects.js.map