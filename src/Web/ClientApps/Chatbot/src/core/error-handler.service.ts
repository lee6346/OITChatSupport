import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
//import { ERROR_CONFIG, ErrorConfig } from '../chatbot-config.module';

import { ErrorMessage } from '../model/ErrorMessage';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class ErrorHandlerService{

    private oitErrorUri: string = 'http://localhost:5000/api/Home/Error';
    constructor(
        private http: Http,
        //@Inject(ERROR_CONFIG) private errorConfig: ErrorConfig
    ) { }

    public sendErrorReport$(error: any, message: string, level: number) {
        this.http.post(
            this.oitErrorUri,
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
        let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }


}