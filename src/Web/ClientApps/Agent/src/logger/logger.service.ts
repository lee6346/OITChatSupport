import { Injectable, Inject, InjectionToken, ReflectiveInjector } from '@angular/core';

import { LogLevel } from './log-level.enum';

export const loggerLevel = new InjectionToken<LogLevel>('loggerlevel');


@Injectable()
export class LoggerService {

    private _logLevel: LogLevel;

    get logLevel(): LogLevel {
        return this._logLevel;
    }

    set logLevel(logLevel: LogLevel) {
        this._logLevel = logLevel;
    }

    constructor() { }

    debug: (message?: any, ...optionalParams: any[]) => void;
    info: (message?: any, ...optionalParams: any[]) => void;
    log: (message?: any, ...optionalParams: any[]) => void;
    warn: (message?: any, ...optionalParams: any[]) => void;
    error: (message?: any, ...optionalParams: any[]) => void;
    fatal: (message?: any, ...optionalParams: any[]) => void;
    security: (message?: any, ...optionalParams: any[]) => void;


    
}