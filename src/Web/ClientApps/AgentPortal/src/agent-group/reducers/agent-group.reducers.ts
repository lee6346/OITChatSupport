import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { UpdateStr } from "@ngrx/entity/src/models";
import { Agent } from '../models/agent.model';
import * as agentGroup from '../actions/agent-group.actions';

export interface State extends EntityState<Agent> {
    selectedAgentId: string | null;
}

export const adapter: EntityAdapter<Agent> = createEntityAdapter<Agent>({
    selectId: (agent: Agent) => agent.agentId,
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
    selectedAgentId: null,
});

export function agentGroupReducer(state = initialState, action: agentGroup.Actions): State {
    switch (action.type) {
        case agentGroup.RECEIVED_GROUP_JOINED: {
            return {
                ...adapter.updateOne(normalizeAgentPartial(action.agent), state),
                selectedAgentId: state.selectedAgentId,
            };
        }
        case agentGroup.RECEIVED_GROUP_LEFT: {
            return {
                ...adapter.updateOne(normalizeAgentPartial(action.agent), state),
                selectedAgentId: state.selectedAgentId,
            };
        }
        case agentGroup.RETRIEVE_GROUP_AGENTS_COMPLETE: {
            console.log('received agents');
            return {
                ...adapter.addMany(action.agents, state),
                selectedAgentId: state.selectedAgentId,
            };
        }
        default:
            return state;
    }
};
export const getSelectedId = (state: State) => state.selectedAgentId;

export function normalizeAgentPartial(agent: Agent): UpdateStr<Agent> {
    return {id: agent.agentId, changes: agent } as UpdateStr<Agent>;
}