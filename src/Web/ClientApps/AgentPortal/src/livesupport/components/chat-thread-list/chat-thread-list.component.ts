import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ChatThreadComponent } from '../chat-thread/chat-thread.component';
import { ChatThread } from '../../models';


@Component({
  selector: 'chat-thread-list',
  templateUrl: './chat-thread-list.component.html',
  styleUrls: ['./chat-thread-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatThreadListComponent {

    @ViewChild(ChatThreadComponent)
    private threadComponent: ChatThreadComponent;
    

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