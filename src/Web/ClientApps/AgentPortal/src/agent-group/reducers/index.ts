import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAgentGroup from './agent-group.reducers';
import * as fromRoot from '../../store/index';

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

export const getSelectedAgentId = createSelector(
    getAgentGroupEntitiesState,
    fromAgentGroup.getSelectedId
);

export const {
    selectIds: getAgentIds,
    selectEntities: getAgentGroupEntities,
    selectAll: getAllGroupAgents,
    selectTotal: getTotalAgents,
} = fromAgentGroup.adapter.getSelectors(getAgentGroupEntitiesState);

export const getSelectedAgent = createSelector(
    getAgentGroupEntities,
    getSelectedAgentId,
    (entities, selectedId) => {
        return selectedId && entities[selectedId];
    }
);