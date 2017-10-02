
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ValidatorErrorService {
    /*
    public validationMessages() {
        const messages = {
            required: 'This field is required',
            email: 'This email address is invalid',
            notAllowedCharacters: (matches: any[]) => {
                let matchedCharacters = matches;
                matchedCharacters = matchedCharacters.reduce((characterString, character, index) => {
                    let string = characterString;
                    string += character;
                    if (matchedCharacters.length !== index + 1) {
                        string += ', ';
                    }
                    return string;
                }, '');
                return `These characters are not allowed: ${matchedCharacters}`;
            },
        };
        return messages;
    }

    public validateForm(formToValidate: FormGroup, formErrors: any, checkDirty?: boolean) {
        const form = formToValidate;
        for (const field in formErrors) {
            if (field) {
                formErrors[field] = '';
                const control = form.get(field);

                const messages = this.validationMessages();
                if (!checkDirty || (control.dirty || control.touched)) {
                    for (const key in control.errors) {
                        if (key && key !== 'notAllowedCharacters') {
                            formErrors[field] = formErrors[field] || messages[key];
                        }
                        else {
                            formErrors[field] = formErrors[field] || messages[key](control.errors[key]);
                        }
                    }
                }
            }
        }
        return formErrors;
    }
    */
}