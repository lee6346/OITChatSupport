import { Component } from '@angular/core';


/**
 * The testing component to launch the chat window and chat with the bot
 */
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {

    /**
     * Maintains chat connection state used to open/close the window
     */
    chatConnected: boolean = false;

    constructor() { }

    /**
     * Event handler to display chat window when the event is emitted
     */
    onStartSession() {
        this.chatConnected = true;
    }

    /**
     * Event handler to remove chat window when the event is emitted
     */
    onDisconnectSession() {
        this.chatConnected = false;
    }
}