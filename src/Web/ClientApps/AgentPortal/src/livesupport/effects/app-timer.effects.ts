import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CHANGE_SECOND_INTERVAL, ChangeSecondIntervalAction, SecondIntervalChangedAction } from '../actions/app-timer.actions';
import { AppTimerService } from '../services/app-timer.service';

@Injectable()
export class ChatMessageEffects {

    constructor(
        private actions$: Actions,
        private timerService: AppTimerService
    ) { }

    @Effect()
    changeTimerInterval$: Observable<Action> = this.actions$.ofType(CHANGE_SECOND_INTERVAL)
        .map((action: ChangeSecondIntervalAction) => {
            this.timerService.changeTimerInterval(action.interval);
            return new SecondIntervalChangedAction(action.interval);
        })
        .catch((err: any) => {
            return of({ type: 'effect error: changeTimerInterval$' });
        });
}