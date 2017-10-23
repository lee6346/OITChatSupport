import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {

    chatConnected: boolean = false;

    constructor() { }

    showChatWindow() {
        this.chatConnected = true;
    }

    onDisconnectSession(disconnect: boolean) {
        this.chatConnected = false;
    }
}