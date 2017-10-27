import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../reducers/index';
import { EmitSecondIntervalAction } from '../actions/app-timer.actions';

@Injectable()
export class AppTimerService {

    constructor(
        private store: Store<State>
    ) { }



}