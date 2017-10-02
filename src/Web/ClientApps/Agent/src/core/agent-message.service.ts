import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HubConnection } from '@aspnet/signalr-client';
import * as Rx from 'rxjs/Rx';

/**
 * Services real time agent-group messaging via signal r 
 */
@Injectable()
export class AgentMessageService {}