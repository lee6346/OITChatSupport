import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { DirectLineThreadStatus } from '../../models';

@Component({
  selector: 'chat-thread-list',
  templateUrl: './chat-thread-list.component.html',
  styleUrls: ['./chat-thread-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatThreadListComponent implements OnInit {

    @Input()
    threadStatuses: DirectLineThreadStatus[];

    @Output()
    switchThread: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }
    ngOnInit() {
    }
    onClickThread(conversationId: string): void {
        this.switchThread.emit(conversationId);
    }
}