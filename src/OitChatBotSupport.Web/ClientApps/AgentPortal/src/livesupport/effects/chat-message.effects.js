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
import { SEND_MESSAGE_ACTIVITY, LOAD_CACHED_MESSAGES, MessageActivitySentAction, CachedMessagesLoadedAction } from '../actions/chat-message.actions';
import { DirectLineService } from '../services/directline.service';
var ChatMessageEffects = (function () {
    function ChatMessageEffects(actions$, directLineService) {
        var _this = this;
        this.actions$ = actions$;
        this.directLineService = directLineService;
        this.sendMessageActivity$ = this.actions$.ofType(SEND_MESSAGE_ACTIVITY)
            .map(function (action) {
            return new MessageActivitySentAction(_this.directLineService.sendMessage(action.chatLoad));
        })
            .catch(function (err) {
            return of({ type: 'effect error: sendMessageActivity$' });
        });
        this.getCachedActivities$ = this.actions$.ofType(LOAD_CACHED_MESSAGES)
            .switchMap(function (action) {
            return _this.directLineService.getCachedActivities$(action.conversation)
                .map(function (activities) {
                var cachedLoad = { threadId: action.conversation.conversationId, cachedMessageSet: activities };
                return new CachedMessagesLoadedAction(cachedLoad);
            })
                .catch(function (err) {
                return of({ type: 'effect error: $getCachedActivities' });
            });
        });
    }
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ChatMessageEffects.prototype, "sendMessageActivity$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ChatMessageEffects.prototype, "getCachedActivities$", void 0);
    ChatMessageEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Actions,
            DirectLineService])
    ], ChatMessageEffects);
    return ChatMessageEffects;
}());
export { ChatMessageEffects };
//# sourceMappingURL=chat-message.effects.js.map