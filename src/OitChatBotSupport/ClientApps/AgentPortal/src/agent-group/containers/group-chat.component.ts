import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromAgentGroup from '../reducers/index';
import * as agentGroup from '../actions/agent-group.actions';
import { AgentMessage } from '../models';
@Component({
    selector: 'group-chat',
    templateUrl: './group-chat.component.html',
    styleUrls: ['./group-chat.component.css'],
})
export class GroupChatComponent implements OnInit{

    groupMessages$: Observable<AgentMessage[]>;

    constructor(private store: Store<fromAgentGroup.State>) {
        this.groupMessages$ = store.select(fromAgentGroup.getGroupMessages).map(val => val.toArray());
    }

    ngOnInit() { }

    onMessageSubmitted(message: string) {

            let payload: AgentMessage = {
                agentId: 'jvr632',
                group: 'askrowdy',
                text: message, 
            };
            this.store.dispatch(new agentGroup.SendGroupMessageAction(payload));

    }
}