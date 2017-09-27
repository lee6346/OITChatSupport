import { Component } from '@angular/core';



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    public chatDisplayed: boolean = false;

    constructor() {

    }
    showChatWindow() {
        this.chatDisplayed = true;
    }

    removeChatWindow(display: boolean) {
        this.chatDisplayed = display;
    }

}