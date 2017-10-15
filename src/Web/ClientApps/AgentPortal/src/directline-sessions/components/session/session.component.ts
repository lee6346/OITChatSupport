import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DirectLineThread } from '../../../shared/model';
import { DirectLineSessionState } from '../../../store/reducer/direct-line.reducer';
import { Activity } from 'botframework-directlinejs';

@Component({
    selector: 'session',
    templateUrl: './session.component.html',
    styleUrls: ['./session.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionComponent implements OnInit{

    @Input()
    directLineSession: DirectLineSessionState;

    constructor() {
    }

    ngOnInit() {
        console.log('current ssessions....' + this.directLineSession);
    }
}