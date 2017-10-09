import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

import { LiveRequest, CurrentConversation } from '../model';


@Component({
    selector: 'live-request',
    templateUrl: './live-request.component.html',
    styleUrls: ['./live-request.component.css']
})
export class LiveRequestComponent implements OnInit, OnDestroy {


    constructor(
    ) { }

    public onRequestSelected(liveRequest: LiveRequest) {

    }

}