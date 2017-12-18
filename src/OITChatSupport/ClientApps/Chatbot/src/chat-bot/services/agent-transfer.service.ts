import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { TransferRequest } from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class AgentTransferService {

    constructor(
        private http: HttpClient
    ) { }

    public sendTransferRequest(transfer: TransferRequest): void {
        this.http.post<Response>(
            environment.baseWebUrl +
            environment.makeTransferRequest, transfer)
            .subscribe();
    }
}