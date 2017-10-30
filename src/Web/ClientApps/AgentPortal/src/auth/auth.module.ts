import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { AuthEffects } from './effects/auth.effects';
import { reducers } from './reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([AuthEffects])
    ],
    declarations: [],
    exports: [],
    providers: [AuthService, AuthGuard]
})
export class AuthModule {}