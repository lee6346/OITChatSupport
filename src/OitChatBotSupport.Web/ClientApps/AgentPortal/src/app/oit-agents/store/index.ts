import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromAgentGroup from './agent-group.reducers';
import * as fromRoot from '../../shared/index';
import { AgentGroupState } from './agent-group.state';

export interface OitAgentsState {
    agentGroup: AgentGroupState;
}

export interface State extends fromRoot.State {
    'oitagents': OitAgentsState;
}

export const reducers: ActionReducerMap<OitAgentsState> = {
    agentGroup: fromAgentGroup.agentGroupReducer
};

export const getOitAgentsState = createFeatureSelector<OitAgentsState>('oitagents');

export const getAgentGroupEntitiesState = createSelector(
    getOitAgentsState,
    state => state.agentGroup
);

export const getAgentGroup = createSelector(
    getAgentGroupEntitiesState,
    state => state.agentGroup
);


