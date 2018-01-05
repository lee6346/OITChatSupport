import { transition, trigger, state, animate, style, keyframes } from '@angular/animations';

export const fadeInOut = (iterations: number = 1, speed: number = 300) => {
    return trigger('fadeInOut', [
        state('hide', style({
            opacity: 0
        }))
    ]);
};