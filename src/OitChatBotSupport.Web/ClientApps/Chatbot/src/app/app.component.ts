import { Component } from '@angular/core';


/**
 * The root bootstrap component when the application loads
 */
@Component({
    selector: 'chat-bot',
    template: `<chat-session></chat-session>`,
})
export class AppComponent { }