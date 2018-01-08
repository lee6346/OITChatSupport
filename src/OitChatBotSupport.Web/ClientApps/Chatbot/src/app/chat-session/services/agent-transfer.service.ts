import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { TransferRequest, TransferResponse, CancelRequest } from '../models';


@Injectable()
export class AgentTransferService {

    constructor(
        private http: HttpClient
    ) { }

    private transferRequestApi: string = 'http://localhost:5000/api/agentsupport/makerequest';
    private cancelRequestApi: string = 'http://localhost:5000/api/agentsupport/cancelrequest';

    public sendTransferRequest(transfer: TransferRequest): void {
        this.http.post<TransferResponse>(this.transferRequestApi, transfer)
            .subscribe(next => console.log(next));
    }

    public cancelTransferRequest(cancel: CancelRequest): void {
        this.http.post<any>(this.cancelRequestApi, cancel)
            .subscribe(next => console.log(next));
    }
}