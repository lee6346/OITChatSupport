import { Component, OnInit, OnDestroy, EventEmitter, Injector, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import * as Rx from 'rxjs/Rx';
import { DirectLine, Conversation, Activity } from 'botframework-directlinejs';

@Component({
    selector: 'cached-messages',
    templateUrl: './cached-messages.component.html',
    styleUrls: ['./cached-messages.component.css'],
})
export class CachedMessagesComponent { }