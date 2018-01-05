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
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ACCEPT_LIVE_REQUEST, LOAD_LIVE_REQUESTS, LiveRequestAcceptedAction, LiveRequestsLoadedAction } from '../actions/live-request.actions';
import { LiveRequestService } from '../services/live-request.service';
var LiveRequestEffects = (function () {
    function LiveRequestEffects(actions$, liveRequestService) {
        var _this = this;
        this.actions$ = actions$;
        this.liveRequestService = liveRequestService;
        this.acceptLiveRequest$ = this.actions$
            .ofType(ACCEPT_LIVE_REQUEST).mergeMap(function (action) {
            return _this.liveRequestService.acceptLiveRequest$(action.liveRequest).map(function (data) {
                return new LiveRequestAcceptedAction(data, action.liveRequest.botHandle);
            });
        })
            .catch(function (err) {
            return of({ type: 'effect error: acceptLiveRequest$' });
        });
        this.getLiveRequests$ = this.actions$.ofType(LOAD_LIVE_REQUESTS)
            .switchMap(function (action) {
            return _this.liveRequestService.getLiveRequests$()
                .map(function (data) {
                return new LiveRequestsLoadedAction(data);
            })
                .catch(function (err) {
                return of({ type: 'effect error: getLiveRequests$' });
            });
        });
    }
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], LiveRequestEffects.prototype, "acceptLiveRequest$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], LiveRequestEffects.prototype, "getLiveRequests$", void 0);
    LiveRequestEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Actions,
            LiveRequestService])
    ], LiveRequestEffects);
    return LiveRequestEffects;
}());
export { LiveRequestEffects };
//# sourceMappingURL=live-request.effects.js.map