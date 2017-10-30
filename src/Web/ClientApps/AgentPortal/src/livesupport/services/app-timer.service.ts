import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs/Rx';
import { State } from '../reducers/index';
import { EmitSecondIntervalAction } from '../actions/app-timer.actions';

@Injectable()
export class AppTimerService {

    private timer: Subject<number> = new Subject<number>();
    private timerUnsubscribe: Subject<void> = new Subject<void>();

    constructor(
        private store: Store<State>
    ) {
        this.initializeTimer(10000);
    }


    initializeTimer(interval: number) {
        this.timer.switchMap(interval => Observable.timer(0, interval))
            .takeUntil(this.timerUnsubscribe).subscribe(
            (next: number) => { this.store.dispatch(new EmitSecondIntervalAction(next)) },
            (err: any) => console.log('TimerService: error emitting second intervals'),
            () => console.log('TimerService: Cancelled timer')
        );
    }

    stopTimer() {
        this.timerUnsubscribe.next();
        this.timerUnsubscribe.complete();
    }

    changeTimerInterval(interval: number) {
        this.timer.next(interval);
    }



}