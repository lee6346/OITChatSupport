var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
var PendingListComponent = (function () {
    function PendingListComponent() {
        this.acceptRequest = new EventEmitter();
    }
    PendingListComponent.prototype.onRequestAccepted = function (liveRequest) {
        this.acceptRequest.emit(liveRequest);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PendingListComponent.prototype, "liveRequests", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PendingListComponent.prototype, "timer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PendingListComponent.prototype, "groupToggle", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], PendingListComponent.prototype, "acceptRequest", void 0);
    PendingListComponent = __decorate([
        Component({
            selector: 'pending-list',
            templateUrl: './pending-list.component.html',
            styleUrls: ['./pending-list.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], PendingListComponent);
    return PendingListComponent;
}());
export { PendingListComponent };
//# sourceMappingURL=pending-list.component.js.map