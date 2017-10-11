import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { LiveRequest } from '../../../shared/model/live-request.model';
@Component({
    selector: 'pending-request',
    templateUrl: './pending-request.component.html',
    styleUrls: ['./pending-request.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingRequestComponent {
    @Input()
    liveRequest: LiveRequest;
}