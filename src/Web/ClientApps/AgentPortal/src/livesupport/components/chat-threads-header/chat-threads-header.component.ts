import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'chat-threads-header',
    templateUrl: './chat-threads-header.component.html',
    styleUrls: ['./chat-threads-header.component.css'],
})
export class ChatThreadsHeaderComponent {

    private collapse: string = 'active';
    private expand: string = 'inactive';

    @Input()
    currentThreadCount: number;

    constructor() { }
}