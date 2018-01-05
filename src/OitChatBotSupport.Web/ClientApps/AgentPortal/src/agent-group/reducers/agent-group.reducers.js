import { List } from 'immutable';
import * as agentGroup from '../actions/agent-group.actions';
export var initialState = {
    groupAgents: List(),
    groupMessages: List(),
};
export function agentGroupReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case agentGroup.RECEIVED_JOINED_AGENT:
            return Object.assign({}, state, {
                groupAgents: state.groupAgents
                    .filter(function (agent) { return agent.agentId
                    !== action.agent.agentId; }).concat(action.agent),
                groupMessages: state.groupMessages
            });
        case agentGroup.RECEIVED_LEFT_AGENT:
            return Object.assign({}, state, {
                groupAgents: state.groupAgents
                    .filter(function (agent) { return agent.agentId
                    !== action.agent.agentId; }).concat(action.agent)
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
export var getAgents = function (state) { return state.groupAgents; };
export var getLoggedAgents = function (state) { return state.groupAgents.filter(function (agent) { return agent.connected; }); };
export var getGroupMessages = function (state) { return state.groupMessages; };
//# sourceMappingURL=agent-group.reducers.js.map