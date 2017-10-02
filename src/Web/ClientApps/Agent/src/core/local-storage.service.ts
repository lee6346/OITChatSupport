import { Injectable } from '@angular/core';

/**
 * Services for storing agent-specific data (connection ids, session ids, cookie id)
 */
@Injectable()
export class LocalStorageService {
    constructor() { }

    public storeCookieId(cookieId: string): void {
        localStorage.setItem('cookieId', cookieId);
    }

    public getCookieId(): string | null {
        return localStorage.getItem('cookieId');
    }

    public removeCookieId(): void {
        localStorage.removeItem('cookieId');
    }

    public storeHubConnectionId(hubConnectionId: string): void {
        localStorage.setItem('hubConnectionId', hubConnectionId);
    }

    public getHubConnectionId(): string | null {
        return localStorage.getItem('hubConnectionId');
    }

    public removeHubConnectionId(): void {
        localStorage.removeItem('hubConnectionId');
    }

}