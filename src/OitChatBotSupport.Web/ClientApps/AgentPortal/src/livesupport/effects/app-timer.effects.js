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
import { INITIALIZE_TIMER } from '../actions/app-timer.actions';
import { AppTimerService } from '../services/app-timer.service';
var AppTimerEffects = (function () {
    function AppTimerEffects(actions$, timerService) {
        var _this = this;
        this.actions$ = actions$;
        this.timerService = timerService;
        this.initializeTimer$ = this.actions$.ofType(INITIALIZE_TIMER)
            .do(function (action) {
            _this.timerService.initializeTimer(action.interval);
        })
            .catch(function (err) {
            return of({ type: 'effect error: initializeTimer$' });
        });
    }
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], AppTimerEffects.prototype, "initializeTimer$", void 0);
    AppTimerEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Actions,
            AppTimerService])
    ], AppTimerEffects);
    return AppTimerEffects;
}());
export { AppTimerEffects };
//# sourceMappingURL=app-timer.effects.js.map