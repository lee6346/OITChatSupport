import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

export const toggleButtonAnimations = trigger('activeButton', [
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


export const countChangeAnimations = trigger('activeButton', [
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