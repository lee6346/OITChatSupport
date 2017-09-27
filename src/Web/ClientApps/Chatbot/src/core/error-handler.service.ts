import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { ERROR_CONFIG, ErrorConfig } from '../chatbot-config.module';

import { ErrorMessage } from '../model/ErrorMessage';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class ErrorHandlerService{

    constructor(
        private http: Http,
        @Inject(ERROR_CONFIG) private errorConfig: ErrorConfig
    ) { }

    public sendErrorReport$(error: any, message: string, level: number) {
        this.http.post(
            this.errorConfig.oitErrorUri,
            { errorMessage: message, errorStackTrack: error, errorLevel: level } as ErrorMessage,
            this.getRequestOptions())
            .map((res: Response) => res.json())
            .subscribe(
                next => console.log("successfully sent"),
                err => console.log("error sending err message"),
                () => console.log("request completed")
            );
    }

    public getRequestOptions(): RequestOptions {
        return new RequestOptions(new Headers({ 'Content-Type': 'application/json' }));
    }


}