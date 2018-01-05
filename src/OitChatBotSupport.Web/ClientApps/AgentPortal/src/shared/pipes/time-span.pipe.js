var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var TimeSpanPipe = (function () {
    function TimeSpanPipe() {
    }
    TimeSpanPipe.prototype.transform = function (givenDate) {
        var date = Date.parse(givenDate);
        if (isNaN(date))
            throw Error('invalid date format');
        return Math.abs(Date.now() - date);
    };
    TimeSpanPipe = __decorate([
        Pipe({
            name: 'timeSpan'
        })
    ], TimeSpanPipe);
    return TimeSpanPipe;
}());
export { TimeSpanPipe };
//# sourceMappingURL=time-span.pipe.js.map