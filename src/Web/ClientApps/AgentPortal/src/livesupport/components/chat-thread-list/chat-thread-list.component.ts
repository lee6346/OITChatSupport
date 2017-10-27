import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

import { ChatThread } from '../../models';

@Component({
  selector: 'chat-thread-list',
  templateUrl: './chat-thread-list.component.html',
  styleUrls: ['./chat-thread-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatThreadListComponent {

    @Input()
    threads: ChatThread[];

    @Input()
    selectedThreadId: string;

    @Input()
    listToggle: boolean;

    @Output()
    switchThread: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    removeThread: EventEmitter<string> = new EventEmitter<string>();
    

    constructor() {
        
    }


    onThreadSwitched(threadId: string): void {
        this.switchThread.emit(threadId);
    }

    onThreadRemoved(threadId: string): void {
        this.removeThread.emit(threadId);
    }

    
}