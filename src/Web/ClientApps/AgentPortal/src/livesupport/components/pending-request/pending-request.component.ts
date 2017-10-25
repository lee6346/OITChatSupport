import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { transition, trigger, state, animate, style } from '@angular/animations';
import { LiveRequest } from '../../models';

@Component({
    selector: 'pending-request',
    templateUrl: './pending-request.component.html',
    styleUrls: ['./pending-request.component.css'],
    animations: [
        trigger(
            'toggleAnimation', [
                transition(':enter', [
                    style({ transform: 'translateY(0)', opacity: 0 }),
                    animate('350ms', style({transform: 'translateY(10%)', opacity: 1}))
                ]),
                transition(':leave', [
                    style({ transform: 'translateY(10%)', opacity: 1 }),
                    animate('350ms', style({transform: 'translateY(0)', opacity: 0}))
                ])
            ]
        ),
        trigger(
            'liveRequestInOut', [
                transition(':enter', [
                    style({ transform: 'translateX(100%)', opacity: 0 }),
                    animate('250ms', style({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                transition(':leave', [
                    style({ transform: 'translateX(0)', opacity: 1 }),
                    animate('250ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                ])
            ]
        ),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingRequestComponent {

    @Input()
    liveRequest: LiveRequest;


    @Output()
    acceptRequest: EventEmitter<LiveRequest> = new EventEmitter<LiveRequest>();

    opened: boolean = false;

    

    constructor() 
    { }

    

    toggleContent() {
        this.opened ? this.opened = false : this.opened = true;
    }

    onAcceptClicked() {
        this.acceptRequest.emit(this.liveRequest);
    }
   
}