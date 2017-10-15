import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { DirectLineSessionState } from '../../../store/reducer/direct-line.reducer';
import { DirectLineThread } from '../../../shared/model/directline-thread.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionListComponent implements OnInit {

    @Input()
    directLineSessions: DirectLineSessionState[];

    @Output()
    switchThread: EventEmitter<string> = new EventEmitter<string>();
    constructor() { }
    ngOnInit() {
        console.log('lots of sessions: ' + this.directLineSessions);
    }
    onClickThread(conversationId: string): void {
        this.switchThread.emit(conversationId);
    }
}