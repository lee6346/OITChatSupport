import { FormControl, Validators } from '@angular/forms';


// base valid characters regex
const validCharacters = /[^\s\w,.:&\/()+%'`@-]/;

export class BaseCustomValidators {

    // static method for validation
    static validateCharacters(formControl: FormControl) {
        if (formControl.value && formControl.value.length > 0) {
            const matches = formControl.value.match(validCharacters);

            return matches && matches.length ? { invalid_characters: matches } : null;
        }
        else {
            return null;
        }
    }
}
