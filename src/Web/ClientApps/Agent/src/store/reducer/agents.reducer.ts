import { Action } from '@ngrx/store';


import { Agent } from '../../model';
import { AgentsState } from '../state/agents.state';
import * as agentsAction from '../action/agents.action';

export const initalState: AgentsState = {
    agents: []
};

export function agentsReducer(state = initalState, action: agentsAction.Actions): AgentsState {
    switch (action.type) {

        case agentsAction.JOIN_GROUP:
            return Object.assign({}, state, {
                agents: state.agents
            })
    }
}