import { List } from 'immutable';
import { Agent } from '../models';

import * as agentGroup from '../actions/agent-group.actions';
import { AgentGroupState } from './agent-group.state';


export const initialState: AgentGroupState = {
    agentGroup: List<Agent>()
};

export function agentGroupReducer(state = initialState, action: agentGroup.Actions): AgentGroupState {

    switch (action.type) {
        case agentGroup.AGENT_MEMBER_JOINED:
            return Object.assign({}, state, {
                groupAgents: state.agentGroup
                    .filter((agent: Agent) => agent.agentId
                    !== action.agent.agentId).concat(action.agent)
            });
        case agentGroup.AGENT_MEMBER_LEFT: 
            return Object.assign({}, state, {
                groupAgents: state.agentGroup
                .filter((agent: Agent) => agent.agentId
                !== action.agent.agentId).concat(action.agent)
            });
        case agentGroup.AGENT_GROUP_LOADED:
            return Object.assign({}, state, {
                groupAgents: state.agentGroup.concat(action.agents)
            });
        default:
            return state;
    }
}
