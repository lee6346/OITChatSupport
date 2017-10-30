import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { State } from '../reducers/index';
import { EmitSecondIntervalAction } from '../actions/app-timer.actions';

@Injectable()
export class AppTimerService {

    constructor(
        private store: Store<State>
    ) { }

    initializeTimer(interval: number) {
        Observable.timer(0, interval)
            .subscribe(next => this.store.dispatch(new EmitSecondIntervalAction(next)) );
    }
}