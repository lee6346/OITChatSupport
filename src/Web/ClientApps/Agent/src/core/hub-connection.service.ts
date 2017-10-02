import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';


@Injectable()
export class HubConnectionService {

    private _hubConnection: HubConnection;

    private startHubConnection(): void {
        this._hubConnection.start()
            .then(() => {
                console.log('connection has started');
            })
            .catch(err => {
                console.log('error occurred');
            });
    }


    private registerHubConnectionEvents(): void {

    }
}