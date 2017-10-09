import { Action } from '@ngrx/store';
import { Agent } from '../../shared/model/agent.model';
import { AgentsState } from '../state/agents.state';
import * as agentsAction from '../action/agents.action';

export const initalState: AgentsState = {
    agents: []
};

export function agentsReducer(state = initalState, action: agentsAction.Actions): AgentsState {
    switch (action.type) {

        case agentsAction.RECEIVED_GROUP_JOINED:
            return Object.assign({}, state, {
                agents: () => {
                    let x = state.agents.findIndex(
                        item => item.agentId === action.agent.agentId);
                    if (x !== -1)
                        state.agents[x].connected === true;
                    else
                        state.agents.push(action.agent);
                    return state.agents;
                }
            });
        case agentsAction.RECEIVED_GROUP_LEFT:
            return Object.assign({}, state, {
                agents: () => {
                    let x = state.agents.findIndex(
                        item => item.agentId === action.agent.agentId);
                    if (x !== -1)
                        state.agents[x].connected === false;
                    return state.agents;
                }
            });

        case agentsAction.RETRIEVE_GROUP_AGENTS_COMPLETE:
            return Object.assign({}, state, {
                agents: state.agents
            });

        default:
            return state;
    }
};
export const getAgents = (agentsState: AgentsState) => agentsState.agents;