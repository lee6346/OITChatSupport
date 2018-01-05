export var RETRIEVE_CONNECTION_TOKEN = '[Connection] RETRIEVE_CONNECTION_TOKEN';
export var CONNECTION_TOKEN_RETRIEVED = '[Connection] CONNECTION_TOKEN_RETRIEVED';
export var END_CHAT_CONNECTION = '[Connection] END_CHAT_CONNECTION';
export var CHAT_CONNECTION_ENDED = '[Connection] CHAT_CONNECTION_ENDED';
export var CHANGE_CONNECTION_SUBSCRIBER = '[Connection] CHANGE_CHAT_SUBSCRIBER';
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
var EndChatConnectionAction = (function () {
    function EndChatConnectionAction(conversationId) {
        this.conversationId = conversationId;
        this.type = END_CHAT_CONNECTION;
    }
    return EndChatConnectionAction;
}());
export { EndChatConnectionAction };
var ChatConnectionEndedAction = (function () {
    function ChatConnectionEndedAction(conversationId) {
        this.conversationId = conversationId;
        this.type = CHAT_CONNECTION_ENDED;
    }
    return ChatConnectionEndedAction;
}());
export { ChatConnectionEndedAction };
var ChangeConnectionSubscriberAction = (function () {
    function ChangeConnectionSubscriberAction(id) {
        this.id = id;
        this.type = CHANGE_CONNECTION_SUBSCRIBER;
    }
    return ChangeConnectionSubscriberAction;
}());
export { ChangeConnectionSubscriberAction };
//# sourceMappingURL=directline-connection.actions.js.map