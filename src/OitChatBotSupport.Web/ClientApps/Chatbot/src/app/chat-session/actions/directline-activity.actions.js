export var MESSAGE_ACTIVITY_RECEIVED = '[Activity] MESSAGE_ACTIVITY_RECEIVED';
export var DISCONNECT_ACTIVITY_RECEIVED = '[Activity] DISCONNECT_ACTIVITY_RECEIVED';
export var SEND_MESSAGE_ACTIVITY = '[Activity] SEND_MESSAGE_ACTIVITY';
export var MESSAGE_ACTIVITY_SENT = '[Activity] MESSAGE_ACTIVITY_SENT';
var MessageActivityReceivedAction = (function () {
    function MessageActivityReceivedAction(activity) {
        this.activity = activity;
        this.type = MESSAGE_ACTIVITY_RECEIVED;
    }
    return MessageActivityReceivedAction;
}());
export { MessageActivityReceivedAction };
var DisconnectActivityReceived = (function () {
    function DisconnectActivityReceived(activity) {
        this.activity = activity;
        this.type = DISCONNECT_ACTIVITY_RECEIVED;
    }
    return DisconnectActivityReceived;
}());
export { DisconnectActivityReceived };
var SendMessageActivityAction = (function () {
    function SendMessageActivityAction(message) {
        this.message = message;
        this.type = SEND_MESSAGE_ACTIVITY;
    }
    return SendMessageActivityAction;
}());
export { SendMessageActivityAction };
var MessageActivitySentAction = (function () {
    function MessageActivitySentAction(activity) {
        this.activity = activity;
        this.type = MESSAGE_ACTIVITY_SENT;
    }
    return MessageActivitySentAction;
}());
export { MessageActivitySentAction };
//# sourceMappingURL=directline-activity.actions.js.map