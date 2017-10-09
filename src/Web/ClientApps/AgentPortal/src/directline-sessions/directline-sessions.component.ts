
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'directline-sessions',
    templateUrl: './directline-sessions.component.html',
    styleUrls: ['./directline-sessions.component.css'],
})
export class DirectLineSessionsComponent {
    

    conversationId$: Observable<string>;
    unreadMessagesCounter$: Observable<number>;


    constructor(private store: Store<any>) {
        
    }
}