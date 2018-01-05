import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


/**
 * Shared module contains sharable and non injectable components (widgets, helper functions, etc)
 *
 * - Anguler pipes, directives, animations
 *
 * - The root NGRX store for the different module stores/reducers
 *
 * - Other shared angular modules
 */
@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }