var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { transition, trigger, state, animate, style } from '@angular/animations';
var PendingHeaderComponent = (function () {
    function PendingHeaderComponent() {
        this.collapse = 'active';
        this.expand = 'inactive';
        this.toggleRequests = new EventEmitter();
    }
    Object.defineProperty(PendingHeaderComponent.prototype, "expandView", {
        set: function (expandView) {
            if (expandView) {
                this.collapse = 'inactive';
                this.expand = 'active';
            }
            else {
                this.collapse = 'active';
                this.expand = 'inactive';
            }
        },
        enumerable: true,
        configurable: true
    });
    PendingHeaderComponent.prototype.expandRequests = function () {
        this.toggleRequests.emit(true);
    };
    PendingHeaderComponent.prototype.collapseRequests = function () {
        this.toggleRequests.emit(false);
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PendingHeaderComponent.prototype, "requestCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PendingHeaderComponent.prototype, "expandView", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], PendingHeaderComponent.prototype, "toggleRequests", void 0);
    PendingHeaderComponent = __decorate([
        Component({
            selector: 'pending-header',
            templateUrl: './pending-header.component.html',
            styleUrls: ['./pending-header.component.css'],
            animations: [
                trigger('activeButton', [
                    state('inactive', style({
                        backgroundColor: '#e3e3e3',
                        color: '#696969',
                        boxShadow: '1px 1px 2px #888888',
                    })),
                    state('active', style({
                        backgroundColor: '#c0c0c0',
                        color: 'white',
                    })),
                    transition('inactive => active', animate('300ms')),
                    transition('active => inactive', animate('300ms'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], PendingHeaderComponent);
    return PendingHeaderComponent;
}());
export { PendingHeaderComponent };
//# sourceMappingURL=pending-header.component.js.map