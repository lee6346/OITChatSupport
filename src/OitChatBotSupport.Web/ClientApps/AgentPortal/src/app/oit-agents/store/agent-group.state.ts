import { List } from 'immutable';
import { Agent } from '../models';

export interface AgentGroupState {
    agentGroup: List<Agent>;
}