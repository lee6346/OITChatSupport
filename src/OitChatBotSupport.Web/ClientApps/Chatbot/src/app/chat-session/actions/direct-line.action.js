export var MESSAGE_ACTIVITY_RECEIVED = '[Activity] MESSAGE_ACTIVITY_RECEIVED';
export var SEND_MESSAGE_ACTIVITY = '[Activity] SEND_MESSAGE_ACTIVITY';
export var MESSAGE_ACTIVITY_SENT = '[Activity] MESSAGE_ACTIVITY_SENT';
export var RETRIEVE_CONNECTION_TOKEN = '[Connection] RETRIEVE_CONNECTION_TOKEN';
export var CONNECTION_TOKEN_RETRIEVED = '[Connection] CONNECTION_TOKEN_RETRIEVED';
var MessageActivityReceivedAction = (function () {
    function MessageActivityReceivedAction(activity) {
        this.activity = activity;
        this.type = MESSAGE_ACTIVITY_RECEIVED;
    }
    return MessageActivityReceivedAction;
}());
export { MessageActivityReceivedAction };
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
var RetrieveConnectionTokenAction = (function () {
    function RetrieveConnectionTokenAction() {
        this.type = RETRIEVE_CONNECTION_TOKEN;
    }
    return RetrieveConnectionTokenAction;
}());
export { RetrieveConnectionTokenAction };
var ConnectionTokenRetrievedAction = (function () {
    function ConnectionTokenRetrievedAction(conversationId) {
        this.conversationId = conversationId;
        this.type = CONNECTION_TOKEN_RETRIEVED;
    }
    return ConnectionTokenRetrievedAction;
}());
export { ConnectionTokenRetrievedAction };
//# sourceMappingURL=direct-line.action.js.map