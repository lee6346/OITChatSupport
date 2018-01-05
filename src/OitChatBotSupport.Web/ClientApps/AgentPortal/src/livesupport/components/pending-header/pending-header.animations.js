import { trigger, state, style, animate, transition } from '@angular/animations';
export var toggleButtonAnimations = trigger('activeButton', [
    state('inactive', style({
        backgroundColor: '#e3e3e3',
        color: '#696969',
        boxShadow: '1px 1px 2px #888888',
        mozBoxShadow: '1px 1px 2px #888888',
        webkitBoxShadow: '1px 1px 2px #888888'
    })),
    state('active', style({
        backgroundColor: '#c0c0c0',
        color: 'white',
    })),
    transition('inactive => active', animate('300ms')),
    transition('active => inactive', animate('300ms'))
]);
export var countChangeAnimations = trigger('activeButton', [
    state('inactive', style({
        backgroundColor: '#e3e3e3',
        color: '#696969',
        transform: 'scale(1)'
    })),
    state('active', style({
        backgroundColor: '#696969',
        color: '#e3e3e3',
        transform: 'scale(0.95)'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
]);
//# sourceMappingURL=pending-header.animations.js.map