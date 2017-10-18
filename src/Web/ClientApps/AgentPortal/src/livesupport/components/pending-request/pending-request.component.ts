import { Component, ChangeDetectionStrategy, Input, OnInit} from '@angular/core';
import { LiveRequest } from '../../models';

@Component({
    selector: 'pending-request',
    templateUrl: './pending-request.component.html',
    styleUrls: ['./pending-request.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingRequestComponent implements OnInit{
    @Input()
    liveRequest: LiveRequest;

    constructor() { }
    ngOnInit() {
    }
}