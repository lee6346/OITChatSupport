import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable } from '@angular/core';

import { LoggerService } from '../logger/logger.service';
import { ErrorMessage, ErrorLevel } from '../model/ErrorMessage';




@Injectable()
export class GlobalErrorHandler implements ErrorHandler{

    constructor(
        private locationStrategy: LocationStrategy,
        private loggerService: LoggerService
    ) {}

    handleError(error:any) {
        //log errors
        var errorMessage = error.message ? error.message : error.toString();
        //this.loggerService.log(errorMessage)
        var url = this.locationStrategy instanceof PathLocationStrategy
            ? this.locationStrategy.path() : '';

        //use  StackTrace from 'stacktrace-js'

        throw error;
    }
}