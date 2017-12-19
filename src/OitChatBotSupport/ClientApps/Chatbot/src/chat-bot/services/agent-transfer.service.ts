import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { TransferRequest, TransferResponse, CancelRequest } from '../models';
import { environment } from '../../../environments/environment';


/**
 * An HTTP service to make an API request for transferring to the agent
 *
 * See {@link TransferRequest} and {@link TransferResponse} for details about the request/response models 
 */
@Injectable()
export class AgentTransferService {

    constructor(
        private http: HttpClient
    ) { }

    /**
     * Make an HTTP Post request for transferring to an agent
     *
     * @example
     * // assumption: var request = new TransferRequest(...);
     * AgentTransferService.sendTransferRequest(request)
     *
     * @param {TransferRequest} transfer The model to send via HTTP Post
     */
    public sendTransferRequest(transfer: TransferRequest): void {
        this.http.post<TransferResponse>(
            environment.baseWebUrl +
            environment.makeTransferRequest, transfer)
            .subscribe(next => console.log(next));
    }

    public cancelTransferRequest(cancel: CancelRequest): void {
        this.http.post<any>(
            environment.baseWebUrl +
            environment.cancelTransferRequest, cancel)
            .subscribe(next => console.log(next));
    }
}