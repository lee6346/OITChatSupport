var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromLiveRequests from '../reducers/index';
import * as liveRequests from '../actions/live-request.actions';
import { InitializeTimerAction } from '../actions/app-timer.actions';
var LiveRequestsContainer = (function () {
    function LiveRequestsContainer(store) {
        this.store = store;
        this.store.dispatch(new InitializeTimerAction(1000));
        this.liveRequests$ = store.select(fromLiveRequests.getLiveRequestList).map(function (requestList) { return requestList.toArray(); });
        this.requestCount$ = this.liveRequests$.map(function (x) { return x.length; });
        this.timer$ = this.store.select(fromLiveRequests.getCurrentTime);
        this.groupToggle$ = this.store.select(fromLiveRequests.getLiveRequestExpanded);
    }
    LiveRequestsContainer.prototype.ngOnInit = function () {
        this.store.dispatch(new liveRequests.LoadLiveRequestsAction());
    };
    LiveRequestsContainer.prototype.onRequestSelected = function (liveRequest) {
        this.store.dispatch(new liveRequests.AcceptLiveRequestAction({
            botHandle: liveRequest.botHandle,
            conversationId: liveRequest.conversationId,
            requested: liveRequest.requested,
        }));
    };
    LiveRequestsContainer.prototype.onToggleRequests = function (expand) {
        this.store.dispatch(new liveRequests.ExpandRequestViewAction(expand));
    };
    LiveRequestsContainer = __decorate([
        Component({
            selector: 'live-requests',
            template: "\n        <div class=\"waiting-threads-container\">\n            <pending-header (toggleRequests)=\"onToggleRequests($event)\"\n                            [expandView]=\"groupToggle$ | async\"\n                            [requestCount]=\"(requestCount$ | async)\"></pending-header>\n            <pending-list [liveRequests]=\"liveRequests$ | async\"\n                            [groupToggle]=\"groupToggle$ | async\"\n                            [timer]=\"timer$ | async\"\n                            (acceptRequest)=\"onRequestSelected($event)\"></pending-list>\n        </div>\n    ",
            styles: ["\n        .waiting-threads-container {\n            height: 100%;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [Store])
    ], LiveRequestsContainer);
    return LiveRequestsContainer;
}());
export { LiveRequestsContainer };
//# sourceMappingURL=live-requests.container.js.map