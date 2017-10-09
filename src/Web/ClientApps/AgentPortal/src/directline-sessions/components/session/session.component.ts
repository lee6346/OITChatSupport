import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';


@Component({
    selector: 'session',
    templateUrl: 'session.component.html',
    styleUrls: ['session.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionComponent {

    constructor() { }
}