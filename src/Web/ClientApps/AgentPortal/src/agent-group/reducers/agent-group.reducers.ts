import { List } from 'immutable';
import { Agent, AgentMessage  } from '../models';
import * as agentGroup from '../actions/agent-group.actions';

export interface State {
    selectedId: string | null;
    groupAgents: List<Agent>;
    groupMessages: List<AgentMessage>;
}

export const initialState: State = {
    selectedId: null,
    groupAgents: List<Agent>(),
    groupMessages: List<AgentMessage>(),
};

export function agentGroupReducer(state = initialState, action: agentGroup.Actions): State {

    switch (action.type) {

        case agentGroup.RECEIVED_JOINED_AGENT:
            return Object.assign({}, state, {
                selectedId: state.selectedId,
                groupAgents: state.groupAgents
                    .filter((agent: Agent) => agent.agentId
                    !== action.agent.agentId).concat(action.agent),
                groupMessages: state.groupMessages
            });

        case agentGroup.RECEIVED_LEFT_AGENT: 
            return Object.assign({}, state, {
                selectedId: state.selectedId,
                groupAgents: state.groupAgents
                .filter((agent: Agent) => agent.agentId
                !== action.agent.agentId).concat(action.agent)
            });
        
        case agentGroup.RECEIVE_GROUP_MESSAGE: 
            return Object.assign({}, state, {
                selectedId: state.selectedId,
                groupAgents: state.groupAgents,
                groupMessages: state.groupMessages.push(action.agentMessage)
            });

        case agentGroup.LOAD_AGENTS_COMPLETE:
            return Object.assign({}, state, {
                selectedId: state.selectedId,
                groupAgents: state.groupAgents.concat(action.agents),
                groupMessages: state.groupMessages
            });

        case agentGroup.LOAD_MESSAGES_COMPLETE:
            return Object.assign({}, state, {
                selectedId: state.selectedId,
                groupAgents: state.groupAgents,
                groupMessages: state.groupMessages.concat(action.agentMessages)
            });
        default:
            return state;
    }
}

export const getSelectedId = (state: State) => state.selectedId;
export const groupByAgent = (state: State) => state.groupMessages.groupBy((message: AgentMessage) => message.agentId);
export const getAgents = (state: State) => state.groupAgents;
export const getLoggedAgents = (state: State) => state.groupAgents.filter((agent: Agent) => agent.connected);
export const getGroupMessages = (state: State) => state.groupMessages;
