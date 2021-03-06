﻿import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
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
                    style({
                        transform: 'translateY(0)',
                        opacity: 0
                    }),
                    animate('450ms ease-out', style({transform: 'translateY(5%)', opacity: 1}))
                ]),
                transition(':leave', [
                    style({ transform: 'translateY(5%)', opacity: 1 }),
                    animate('450ms ease-out', style({transform: 'translateY(0)', opacity: 0}))
                ])
            ]
        ),
        trigger(
            'liveRequestInOut', [
                transition(':enter', [
                    style({ transform: 'translateX(100%)', opacity: 0 }),
                    animate('150ms', style({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                transition(':leave', [
                    style({ transform: 'translateX(0)', opacity: 1 }),
                    animate('150ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                ])
            ]
        ),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingRequestComponent {

    private _liveRequest: LiveRequest;
    private _waitTime: number;

    @Input()
    set liveRequest(liveRequest: LiveRequest) {
        this._liveRequest = liveRequest;
        this._waitTime = Math.abs(Date.parse(liveRequest.requested) - Date.now());
        
    }

    @Input()
    groupToggle: boolean;


    @Output()
    acceptRequest: EventEmitter<LiveRequest> = new EventEmitter<LiveRequest>();

    @Input()
    set waitTime(waitTime: number) {
        this._waitTime += 1000;   
    }

    constructor() { }    

    toggleContent() {
        this.groupToggle ? this.groupToggle = false : this.groupToggle = true;
    }

    onAcceptClicked() {
        this.acceptRequest.emit(this._liveRequest);
    }
}