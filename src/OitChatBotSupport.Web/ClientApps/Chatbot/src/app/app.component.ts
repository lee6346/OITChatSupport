import { Component } from '@angular/core';


@Component({
    selector: 'chat-bot',
    template: `
        <div class="container-fluid chat-window">
            <chat-session></chat-session>
        </div>
    `,
    styles: [`
    .chat-window {
        background-color: #c7bebe;
        height: 100%;
    }
    `]
})
export class AppComponent { }