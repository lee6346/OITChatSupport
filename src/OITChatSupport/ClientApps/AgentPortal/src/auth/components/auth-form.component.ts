import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Auth } from '../models';

@Component({
    selector: 'auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent {

    @Input()
    authStatus: boolean;

    @Output()
    submitLogin: EventEmitter<Auth> = new EventEmitter<Auth>();

    constructor() { }

    onFormSubmit() {
        this.submitLogin.emit();
    }
}