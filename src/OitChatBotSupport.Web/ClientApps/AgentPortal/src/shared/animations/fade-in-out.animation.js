import { trigger, state, style } from '@angular/animations';
export var fadeInOut = function (iterations, speed) {
    if (iterations === void 0) { iterations = 1; }
    if (speed === void 0) { speed = 300; }
    return trigger('fadeInOut', [
        state('hide', style({
            opacity: 0
        }))
    ]);
};
//# sourceMappingURL=fade-in-out.animation.js.map