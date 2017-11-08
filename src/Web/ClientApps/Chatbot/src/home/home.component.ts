import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {

    chatConnected: boolean = false;

    constructor() { }

    onStartSession() {
        this.chatConnected = true;
    }

    onDisconnectSession() {
        this.chatConnected = false;
    }
}