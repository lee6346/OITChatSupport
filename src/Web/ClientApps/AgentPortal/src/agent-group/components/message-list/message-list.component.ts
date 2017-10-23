import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent {

    @Input()
    groupMessages: string;

    constructor() { }

}