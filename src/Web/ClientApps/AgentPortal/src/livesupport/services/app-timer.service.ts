import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { State } from '../reducers/index';
import { EmitSecondIntervalAction } from '../actions/app-timer.actions';

@Injectable()
export class AppTimerService {

    private timerInterval: number;

    constructor(
        private store: Store<State>
    ) { }

    initializeTimer(interval: number) {
        this.timerInterval = interval;
        Observable.timer(0, this.timerInterval)
            .subscribe(next => this.store.dispatch(new EmitSecondIntervalAction(next)) );
    }

    changeTimerInterval(interval: number) {
        this.timerInterval = interval;
    }
}