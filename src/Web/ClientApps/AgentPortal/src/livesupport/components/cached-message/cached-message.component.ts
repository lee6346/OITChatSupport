import {
    Component,
    Input,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';

import { Activity } from 'botframework-directlinejs';

@Component({
    selector: 'cached-message',
    templateUrl: './cached-message.component.html',
    styleUrls: ['./cached-message.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CachedMessageComponent implements OnInit {

    @Input()
    cachedMessage: Activity;

    constructor(
    ) { }

    ngOnInit() {
    }
}