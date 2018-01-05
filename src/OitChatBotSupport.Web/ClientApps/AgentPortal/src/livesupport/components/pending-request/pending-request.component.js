var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { transition, trigger, animate, style } from '@angular/animations';
var PendingRequestComponent = (function () {
    function PendingRequestComponent() {
        this.acceptRequest = new EventEmitter();
    }
    Object.defineProperty(PendingRequestComponent.prototype, "liveRequest", {
        set: function (liveRequest) {
            this._liveRequest = liveRequest;
            this._waitTime = Math.abs(Date.parse(liveRequest.requested) - Date.now());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingRequestComponent.prototype, "waitTime", {
        set: function (waitTime) {
            this._waitTime += 1000;
        },
        enumerable: true,
        configurable: true
    });
    PendingRequestComponent.prototype.toggleContent = function () {
        this.groupToggle ? this.groupToggle = false : this.groupToggle = true;
    };
    PendingRequestComponent.prototype.onAcceptClicked = function () {
        this.acceptRequest.emit(this._liveRequest);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PendingRequestComponent.prototype, "liveRequest", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PendingRequestComponent.prototype, "groupToggle", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], PendingRequestComponent.prototype, "acceptRequest", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PendingRequestComponent.prototype, "waitTime", null);
    PendingRequestComponent = __decorate([
        Component({
            selector: 'pending-request',
            templateUrl: './pending-request.component.html',
            styleUrls: ['./pending-request.component.css'],
            animations: [
                trigger('toggleAnimation', [
                    transition(':enter', [
                        style({
                            transform: 'translateY(0)',
                            opacity: 0
                        }),
                        animate('450ms ease-out', style({ transform: 'translateY(5%)', opacity: 1 }))
                    ]),
                    transition(':leave', [
                        style({ transform: 'translateY(5%)', opacity: 1 }),
                        animate('450ms ease-out', style({ transform: 'translateY(0)', opacity: 0 }))
                    ])
                ]),
                trigger('liveRequestInOut', [
                    transition(':enter', [
                        style({ transform: 'translateX(100%)', opacity: 0 }),
                        animate('150ms', style({ transform: 'translateX(0)', opacity: 1 }))
                    ]),
                    transition(':leave', [
                        style({ transform: 'translateX(0)', opacity: 1 }),
                        animate('150ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                    ])
                ]),
            ],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], PendingRequestComponent);
    return PendingRequestComponent;
}());
export { PendingRequestComponent };
//# sourceMappingURL=pending-request.component.js.map