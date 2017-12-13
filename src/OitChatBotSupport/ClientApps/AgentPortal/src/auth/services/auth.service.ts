import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { Auth } from '../models';

@Injectable()
export class AuthService {
    //testing with random utsa IDs
    agentIds: string[] = ['jvr632', 'jlm555', 'abr444'];

    constructor() { }

    authenticate(auth: Auth): Observable<string> {
        
        if (this.agentIds.findIndex((agents: string) => agents === auth.username) === -1) {
            return _throw("Invalid username");
        }

        return of(auth.username);
    }

    logout(){
        return of(true);
    }
}