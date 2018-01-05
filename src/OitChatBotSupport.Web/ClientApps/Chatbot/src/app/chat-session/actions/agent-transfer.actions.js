export var REQUEST_AGENT_TRANSFER = '[AgentTransfer] REQUEST_AGENT_TRANSFER';
export var AGENT_TRANSFER_REQUESTED = '[AgentTransfer] AGENT_TRANSFER_REQUESTED';
export var CANCEL_AGENT_TRANSFER = '[AgentTransfer] CANCEL_AGENT_TRANSFER';
export var AGENT_TRANSFER_CANCELED = '[AgentTransfer] AGENT_TRANSFER_CANCELED';
export var AGENT_SESSION_ENDED = '[AgentTransfer] AGENT_SESSION_ENDED';
var RequestAgentTransferAction = (function () {
    function RequestAgentTransferAction(request) {
        this.request = request;
        this.type = REQUEST_AGENT_TRANSFER;
    }
    return RequestAgentTransferAction;
}());
export { RequestAgentTransferAction };
var AgentTransferRequestedAction = (function () {
    function AgentTransferRequestedAction() {
        this.type = AGENT_TRANSFER_REQUESTED;
    }
    return AgentTransferRequestedAction;
}());
export { AgentTransferRequestedAction };
var CancelAgentTransferAction = (function () {
    function CancelAgentTransferAction(cancelRequest) {
        this.cancelRequest = cancelRequest;
        this.type = CANCEL_AGENT_TRANSFER;
    }
    return CancelAgentTransferAction;
}());
export { CancelAgentTransferAction };
var AgentTransferCanceledAction = (function () {
    function AgentTransferCanceledAction() {
        this.type = AGENT_TRANSFER_CANCELED;
    }
    return AgentTransferCanceledAction;
}());
export { AgentTransferCanceledAction };
var AgentSessionEndedAction = (function () {
    function AgentSessionEndedAction() {
        this.type = AGENT_SESSION_ENDED;
    }
    return AgentSessionEndedAction;
}());
export { AgentSessionEndedAction };
//# sourceMappingURL=agent-transfer.actions.js.map