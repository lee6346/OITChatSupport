import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAgentGroup from './agent-group.reducers';
export var reducers = {
    agentGroup: fromAgentGroup.agentGroupReducer
};
export var getAgentGroupState = createFeatureSelector('agentgroup');
export var getAgentGroupEntitiesState = createSelector(getAgentGroupState, function (state) { return state.agentGroup; });
export var getGroupMembers = createSelector(getAgentGroupEntitiesState, fromAgentGroup.getAgents);
export var getLoggedMembers = createSelector(getAgentGroupEntitiesState, fromAgentGroup.getLoggedAgents);
export var getGroupMessages = createSelector(getAgentGroupEntitiesState, fromAgentGroup.getGroupMessages);
//# sourceMappingURL=index.js.map