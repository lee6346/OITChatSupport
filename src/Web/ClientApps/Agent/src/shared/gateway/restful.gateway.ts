import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


export abstract class RestfulGateway {


    protected baseUrl: 'http://localhost:5000/';
    protected errorUrl: string = 'home/error';

    constructor(protected http: HttpClient) {}


    authorize(value: string): HttpHeaders {
        return new HttpHeaders().set('Authorization', value);
    }

    queryString(key: string, value: string): HttpParams {
        return new HttpParams().set(key, value);
    }

    sendErrorReport(errorMessage: string): void{
        this.http.post<Response>(this.errorUrl, errorMessage)
            .retry(1)
            .subscribe(
            res => console.log('successfully sent'),
            err => console.error('error posting the error report'),
            () => console.log('completed')        
        );
    }



}