import { Component, OnInit, OnDestroy, EventEmitter, Injector } from '@angular/core';
//may or may not need
import { NgClass, NgStyle } from '@angular/common';
import * as Rx from 'rxjs/Rx';

@Component({
    selector: 'logger-display',
    templateUrl: './logger-display.component.html',
    styleUrls: ['./logger-display.component.css']
})
export class LoggerDisplayComponent implements OnInit, OnDestroy{

    private loggerLevel: number;
    private loggerMessage: string;
    
    public close: EventEmitter<any> = new EventEmitter<any>();



    constructor(private injector: Injector) {
        this.loggerLevel = this.injector.get('logLevel');
        this.loggerMessage = this.injector.get('logMessage');
    }

    ngOnInit() { }

    ngOnDestroy() { }

    public displayDetailedMessage(): void {

    }

    public sendReport(): void {

    }

    public closeDisplay(): void {
        this.close.emit('event');
    }
}