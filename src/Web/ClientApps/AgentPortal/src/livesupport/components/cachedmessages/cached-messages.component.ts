import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Activity } from 'botframework-directlinejs';

@Component({
    selector: 'cached-messages',
    templateUrl: './cached-messages.component.html',
    styleUrls: ['./cached-messages.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CachedMessagesComponent implements OnInit{

    @Input()
    cachedMessages: Activity[];

    @Output()
    hideCachedDisplay: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {
        console.log('got some cahced messages!' + this.cachedMessages);
    }
    onClickHideDisplay(): void {
        this.hideCachedDisplay.emit(true);
    }
 }