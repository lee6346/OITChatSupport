import { HubConnection } from '@aspnet/signalr-client';

export abstract class HubGateway {

    protected _hubConnection: HubConnection;

    constructor() {}

    abstract send(message: any): any

    protected abstract init(): void
}