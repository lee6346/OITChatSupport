import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

import { DirectLineThreadVm } from '../../viewmodels';

@Component({
  selector: 'chat-thread-list',
  templateUrl: './chat-thread-list.component.html',
  styleUrls: ['./chat-thread-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatThreadListComponent {

    @Input()
    threads: DirectLineThreadVm[];

    @Output()
    switchThread: EventEmitter<string> = new EventEmitter<string>();


    

    constructor() {
        
    }


    onThreadSwitched(threadId: string): void {
        this.switchThread.emit(threadId);
    }

    
}