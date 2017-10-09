import { Component, OnInit, OnDestroy, EventEmitter, Injector, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import * as Rx from 'rxjs/Rx';
import { DirectLine, Conversation, Activity } from 'botframework-directlinejs';

@Component({
    selector: 'chat-display',
    templateUrl: './chat-display.component.html',
    styleUrls: ['./chat-display.component.css'],
})
export class ChatDisplayComponent {}