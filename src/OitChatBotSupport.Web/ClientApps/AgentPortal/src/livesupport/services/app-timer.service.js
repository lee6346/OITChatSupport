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
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { EmitSecondIntervalAction } from '../actions/app-timer.actions';
var AppTimerService = (function () {
    function AppTimerService(store) {
        this.store = store;
    }
    AppTimerService.prototype.initializeTimer = function (interval) {
        var _this = this;
        this.timerInterval = interval;
        Observable.timer(0, this.timerInterval)
            .subscribe(function (next) { return _this.store.dispatch(new EmitSecondIntervalAction(next)); });
    };
    AppTimerService.prototype.changeTimerInterval = function (interval) {
        this.timerInterval = interval;
    };
    AppTimerService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Store])
    ], AppTimerService);
    return AppTimerService;
}());
export { AppTimerService };
//# sourceMappingURL=app-timer.service.js.map