import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { BaseCustomValidators } from '../validators/base-custom.validators';
import { ValidatorErrorService } from '../validators/validator-error.service';

@Component({
    selector: 'base-form',
    templateUrl: './base-form.component.html',
})
export class BaseFormComponent implements /*OnInit */{

        /*
    public signUpForm: FormGroup;

    public formErrors = {
        name: '',
        email: '',
        password: '',
    };

    constructor(
        public form: FormBuilder,
        public validatorErrorService: ValidatorErrorService, 
    ) { }

    public signUp() {

        if (this.signUpForm.valid) {
            //do work
        }
        else {
            this.formErrors = this.validatorErrorService.validateForm(this.signUpForm, this.formErrors, false);
        }
    }

    ngOnInit() {
        this.buildForm();
    }


    // build user form: first is input, second is validators 
    public buildForm() {
        this.signUpForm = this.form.group({
            name: ['', [Validators.required, BaseCustomValidators.validateCharacters]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });

        this.signUpForm.valueChanges.subscribe((data) => {
            this.formErrors = this.validatorErrorService.validateForm(this.signUpForm, this.formErrors, true)
        });
    } */
}