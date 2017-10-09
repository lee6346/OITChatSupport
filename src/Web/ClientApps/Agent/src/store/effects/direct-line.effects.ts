
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import * as directLineActions from '../action/direct-line.action';
import { Observable } from 'rxjs/Observable';

import { DirectLineService } from '../../shared/services/direct-line.service';

@Injectable()
export class DirectLineEffects{

    constructor(
        private actions$: Actions,
        private directLineService: DirectLineService

    ) { }


    @Effect() sendActivity$: Observable<Action> = this.actions$.ofType(directLineActions.SEND_MESSAGE_ACTIVITY)
        .switchMap((action: directLineActions.SendMessageActivityAction) => {
            this.directLineService
        })
}