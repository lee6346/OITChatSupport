import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAgentGroup from './agent-group.reducers';
import * as fromRoot from '../../shared/index';

export interface AgentGroupState {
    agentGroup: fromAgentGroup.State;
}

export interface State extends fromRoot.State {
    'agentgroup': AgentGroupState;
}

export const reducers = {
    agentGroup: fromAgentGroup.agentGroupReducer
};

export const getAgentGroupState = createFeatureSelector<AgentGroupState>('agentgroup');

export const getAgentGroupEntitiesState = createSelector(
    getAgentGroupState,
    state => state.agentGroup
);


export const getGroupMembers = createSelector(
    getAgentGroupEntitiesState,
    fromAgentGroup.getAgents
);

export const getLoggedMembers = createSelector(
    getAgentGroupEntitiesState,
    fromAgentGroup.getLoggedAgents
);

export const getGroupMessages = createSelector(
    getAgentGroupEntitiesState,
    fromAgentGroup.getGroupMessages
);

