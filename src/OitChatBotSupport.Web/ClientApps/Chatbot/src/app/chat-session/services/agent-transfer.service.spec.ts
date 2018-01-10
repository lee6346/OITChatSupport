import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AgentTransferService } from './agent-transfer.service';
import { TransferRequest, CancelRequest } from '../models';

describe('AgentTransferService', () => {
    let service: AgentTransferService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                HttpClientTestingModule
            ],
            providers: [AgentTransferService]
        });
    });

    it('should receive a transfer status send a agent transfer request from the API via POST', () => {
        service.sendTransferRequest({conversationId: '', botHandle: 'askrowdy', lastMessage: ''} as TransferRequest)
    })
})