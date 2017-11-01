import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Message } from 'botframework-directlinejs';



@Component({
    selector: 'message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
    @Input()
    messageActivity: Message;

    constructor() { }



}