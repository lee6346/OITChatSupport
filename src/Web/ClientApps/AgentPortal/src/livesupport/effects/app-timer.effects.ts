
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { InitializeTimerAction, INITIALIZE_TIMER } from '../actions/app-timer.actions';
import { AppTimerService } from '../services/app-timer.service';

@Injectable()
export class AppTimerEffects {

    constructor(
        private actions$: Actions,
        private timerService: AppTimerService
    ) { }

    @Effect({dispatch: false})
    initializeTimer$: Observable<Action> = this.actions$.ofType(INITIALIZE_TIMER)
        .do((action: InitializeTimerAction) => {
            this.timerService.initializeTimer(action.interval);
        })
        .catch((err: any) => {
            return of({ type: 'effect error: initializeTimer$' });
        });
}