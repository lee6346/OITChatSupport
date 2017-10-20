import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {

    chatDisplayed: boolean = false;

    constructor() { }

    showChatWindow() {
        this.chatDisplayed = true;
    }

    removeChatWindow() {
        this.chatDisplayed = false;
    }
}