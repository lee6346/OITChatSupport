import { 
    Component, 
    Input, 
    ChangeDetectionStrategy 
    } from '@angular/core';


import { Activity } from 'botframework-directlinejs';
@Component({
    selector: 'cached-message-list',
    templateUrl: './cached-message-list.component.html',
    styleUrls: ['./cached-message-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CachedMessageListComponent{

    @Input()
    cachedMessages: Activity[];

    constructor() {
    }

 }