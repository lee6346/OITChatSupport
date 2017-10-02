import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { ErrorMessage } from '../model/ErrorMessage';

/**
 * Service to send error reports back to the server
 */
@Injectable()
export class ErrorHandlerService {

    private oitErrorUri: string = 'http://localhost:5000/api/Home/Error';
    constructor(
        private http: Http,
    ) { }

    public sendErrorReport$(error: any, message: string, level: number) {
        this.http.post(
            this.oitErrorUri,
            { message: message, stackTrace: error, level: level } as ErrorMessage,
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