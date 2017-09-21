import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    constructor() { }

    public storeConversationId(conversationId: string): void {
        localStorage.setItem('conversationId', conversationId);
    }

    public getConversationId(): string|null {
        return localStorage.getItem('conversationId');
    }

    public removeConversationId(): void {
        localStorage.removeItem('conversationId');
    }

    public storeSecurityToken(securityToken: string): void {
        localStorage.setItem('securityToken', securityToken);
    }

    public getSecurityToken(): string | null {
        return localStorage.getItem('securityToken');
    }

    public removeSecurityToken(): void {
        localStorage.removeItem('securityToken');
    }

}