import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import * as groupChatAction from '../action/group-chat.action';
import { AgentMessage } from '../../shared/model';
import { GroupChatService } from '../../shared/services/group-chat.service';


@Injectable()
export class GroupChatEffects{

    constructor(
        private groupChatService: GroupChatService,
        private actions$: Actions
    ) { }

    @Effect()
    sendGroupMessage$: Observable<Action> = this.actions$.ofType(groupChatAction.SEND_MESSAGE)
        .switchMap((action: groupChatAction.SendMessageAction) => {
            this.groupChatService.sendGroupMessage(action.agentMessage);
            return Observable.of(new groupChatAction.SendMessageCompleteAction(action.agentMessage));
        });

    @Effect()
    getGroupMessages$: Observable<Action> = this.actions$.ofType(groupChatAction.RETRIEVE_CURRENT_MESSAGES)
        .switchMap((action: groupChatAction.RetrieveCurrentMessagesAction) =>
            this.groupChatService.getCurrentMessages$(action.agentId)
                .map((data: AgentMessage[]) => {
                    return new groupChatAction.RetrieveCurrentMessagesCompleteAction(data);
                })
                .catch((err: any) => {
                    return of({ type: 'getGroupMessages$' });
                })
        );
}