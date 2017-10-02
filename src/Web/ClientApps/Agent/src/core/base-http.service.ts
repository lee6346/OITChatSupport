import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs, XHRBackend } from '@angular/http';
import * as Rx from 'rxjs/Rx';
/*
@Injectable()
export class BaseHttpService extends Http{

    constructor(
        backend: XHRBackend,
        options: RequestOptions,
        public http: Http,
    ) {
        super(backend, options);
    }

    public HttpPost$(uri: string, body: any): Rx.Observable<Response> {
        return this.http.post(uri, body, this.getRequestOptions()).catch()
    }


    public getRequestOptions(): RequestOptions {
        let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }

    public httpRequestError(error: any): Rx.Observable<any> {
        if (error instanceof Response) {
            var errMessage;
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Rx.Observable.throw(
                { errorMessage: 'Http request error', errorStackTrack: errMessage, errorLevel: 2 } as ErrorMessage);
        }
        return Rx.Observable.throw(error);
    }

    public request(url: string | Request, options?: RequestOptionsArgs | undefined): Rx.Observable<Response> {
        return super.request(url, options).catch(this.handleError);
    }

    public handleError(error: Response): Rx.Observable<Response> {
        return Rx.Observable.throw(error);
    }
}

*/