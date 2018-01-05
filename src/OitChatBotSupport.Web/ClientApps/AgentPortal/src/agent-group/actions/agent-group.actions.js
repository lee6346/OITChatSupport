export var JOIN_GROUP = '[agent] JOIN_GROUP';
export var JOIN_GROUP_COMPLETE = '[agent] JOIN_GROUP_COMPLETE';
export var RECEIVED_JOINED_AGENT = '[agent] RECEIVED_JOINED_AGENT';
export var RECEIVED_LEFT_AGENT = '[agent] RECEIVED_LEFT_AGENT';
export var LOAD_AGENTS = '[agent] LOAD_AGENTS';
export var LOAD_AGENTS_COMPLETE = '[agent] LOAD_AGENTS_COMPLETE';
export var SEND_GROUP_MESSAGE = '[agentmessage] SEND_GROUP_MESSAGE';
export var SEND_MESSAGE_COMPLETE = '[agentmessage] SEND_MESSAGE_COMPLETE';
export var RECEIVE_GROUP_MESSAGE = '[agentmessage] RECEIVE_GROUP_MESSAGE';
export var LOAD_GROUP_MESSAGES = '[agentmessage] LOAD_GROUP_MESSAGES';
export var LOAD_MESSAGES_COMPLETE = '[agentmessage] LOAD_MESSAGES_COMPLETE';
var JoinGroupAction = (function () {
    function JoinGroupAction(agent) {
        this.agent = agent;
        this.type = JOIN_GROUP;
    }
    return JoinGroupAction;
}());
export { JoinGroupAction };
var JoinGroupCompleteAction = (function () {
    function JoinGroupCompleteAction(agent) {
        this.agent = agent;
        this.type = JOIN_GROUP_COMPLETE;
    }
    return JoinGroupCompleteAction;
}());
export { JoinGroupCompleteAction };
var ReceivedJoinedAgentAction = (function () {
    function ReceivedJoinedAgentAction(agent) {
        this.agent = agent;
        this.type = RECEIVED_JOINED_AGENT;
    }
    return ReceivedJoinedAgentAction;
}());
export { ReceivedJoinedAgentAction };
var ReceivedLeftAgentAction = (function () {
    function ReceivedLeftAgentAction(agent) {
        this.agent = agent;
        this.type = RECEIVED_LEFT_AGENT;
    }
    return ReceivedLeftAgentAction;
}());
export { ReceivedLeftAgentAction };
var LoadAgentsAction = (function () {
    function LoadAgentsAction(group) {
        this.group = group;
        this.type = LOAD_AGENTS;
    }
    return LoadAgentsAction;
}());
export { LoadAgentsAction };
var LoadAgentsCompleteAction = (function () {
    function LoadAgentsCompleteAction(agents) {
        this.agents = agents;
        this.type = LOAD_AGENTS_COMPLETE;
    }
    return LoadAgentsCompleteAction;
}());
export { LoadAgentsCompleteAction };
var SendGroupMessageAction = (function () {
    function SendGroupMessageAction(agentMessage) {
        this.agentMessage = agentMessage;
        this.type = SEND_GROUP_MESSAGE;
    }
    return SendGroupMessageAction;
}());
export { SendGroupMessageAction };
var SendMessageCompleteAction = (function () {
    function SendMessageCompleteAction(agentMessage) {
        this.agentMessage = agentMessage;
        this.type = SEND_MESSAGE_COMPLETE;
    }
    return SendMessageCompleteAction;
}());
export { SendMessageCompleteAction };
var ReceiveGroupMessageAction = (function () {
    function ReceiveGroupMessageAction(agentMessage) {
        this.agentMessage = agentMessage;
        this.type = RECEIVE_GROUP_MESSAGE;
    }
    return ReceiveGroupMessageAction;
}());
export { ReceiveGroupMessageAction };
var LoadGroupMessagesAction = (function () {
    function LoadGroupMessagesAction(group) {
        this.group = group;
        this.type = LOAD_GROUP_MESSAGES;
    }
    return LoadGroupMessagesAction;
}());
export { LoadGroupMessagesAction };
var LoadMessagesCompleteAction = (function () {
    function LoadMessagesCompleteAction(agentMessages) {
        this.agentMessages = agentMessages;
        this.type = LOAD_MESSAGES_COMPLETE;
    }
    return LoadMessagesCompleteAction;
}());
export { LoadMessagesCompleteAction };
//# sourceMappingURL=agent-group.actions.js.map