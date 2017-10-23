import { List } from 'immutable';
import { Agent, AgentMessage  } from '../models';
import * as agentGroup from '../actions/agent-group.actions';

export interface State {
    groupAgents: List<Agent>;
    groupMessages: List<AgentMessage>;
}

export const initialState: State = {
    groupAgents: List<Agent>(),
    groupMessages: List<AgentMessage>(),
};

export function agentGroupReducer(state = initialState, action: agentGroup.Actions): State {

    switch (action.type) {

        case agentGroup.RECEIVED_JOINED_AGENT:
            return Object.assign({}, state, {
                groupAgents: state.groupAgents
                    .filter((agent: Agent) => agent.agentId
                    !== action.agent.agentId).concat(action.agent),
                groupMessages: state.groupMessages
            });

        case agentGroup.RECEIVED_LEFT_AGENT: 
            return Object.assign({}, state, {
                groupAgents: state.groupAgents
                .filter((agent: Agent) => agent.agentId
                !== action.agent.agentId).concat(action.agent)
            });
        
        case agentGroup.RECEIVE_GROUP_MESSAGE: 
            return Object.assign({}, state, {
                groupAgents: state.groupAgents,
                groupMessages: state.groupMessages.push(action.agentMessage)
            });

        case agentGroup.LOAD_AGENTS_COMPLETE:
            return Object.assign({}, state, {
                groupAgents: state.groupAgents.concat(action.agents),
                groupMessages: state.groupMessages
            });

        case agentGroup.LOAD_MESSAGES_COMPLETE:
            return Object.assign({}, state, {
                groupAgents: state.groupAgents,
                groupMessages: state.groupMessages.concat(action.agentMessages)
            });
        default:
            return state;
    }
}



export const getAgents = (state: State) => state.groupAgents;
export const getLoggedAgents = (state: State) => state.groupAgents.filter((agent: Agent) => agent.connected);
export const getGroupMessages = (state: State) => state.groupMessages;
