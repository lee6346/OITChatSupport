export var SEND_MESSAGE_ACTIVITY = '[Message] SEND_MESSAGE_ACTIVITY';
export var MESSAGE_ACTIVITY_SENT = '[Message] MESSAGE_ACTIVITY_SENT';
export var MESSAGE_ACTIVITY_RECEIVED = '[Message] MESSAGE_ACTIVITY_RECEIVED';
export var LOAD_CACHED_MESSAGES = '[Message] LOAD_CACHED_MESSAGES';
export var CACHED_MESSAGES_LOADED = '[Message] CACHED_MESSAGES_LOADED';
export var FILTER_MESSAGE_TEXT = '[Message] FILTER_MESSAGE_TEXT';
export var FILTER_BOT_MESSAGE = '[Message] FILTER_BOT_MESSAGE';
export var FILTER_AGENT_MESSAGE = '[Message] FILTER_AGENT_MESSAGE';
export var FILTER_STUDENT_MESSAGE = '[Message] FILTER_STUDENT_MESSAGE';
var SendMessageActivityAction = (function () {
    function SendMessageActivityAction(chatLoad) {
        this.chatLoad = chatLoad;
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
var MessageActivityReceivedAction = (function () {
    function MessageActivityReceivedAction(activity) {
        this.activity = activity;
        this.type = MESSAGE_ACTIVITY_RECEIVED;
    }
    return MessageActivityReceivedAction;
}());
export { MessageActivityReceivedAction };
var LoadCachedMessagesAction = (function () {
    function LoadCachedMessagesAction(conversation) {
        this.conversation = conversation;
        this.type = LOAD_CACHED_MESSAGES;
    }
    return LoadCachedMessagesAction;
}());
export { LoadCachedMessagesAction };
var CachedMessagesLoadedAction = (function () {
    function CachedMessagesLoadedAction(cachedLoad) {
        this.cachedLoad = cachedLoad;
        this.type = CACHED_MESSAGES_LOADED;
    }
    return CachedMessagesLoadedAction;
}());
export { CachedMessagesLoadedAction };
var FilterMessageTextAction = (function () {
    function FilterMessageTextAction(text) {
        this.text = text;
        this.type = FILTER_MESSAGE_TEXT;
    }
    return FilterMessageTextAction;
}());
export { FilterMessageTextAction };
var FilterBotMessageAction = (function () {
    function FilterBotMessageAction() {
        this.type = FILTER_BOT_MESSAGE;
    }
    return FilterBotMessageAction;
}());
export { FilterBotMessageAction };
var FilterStudentMessageAction = (function () {
    function FilterStudentMessageAction() {
        this.type = FILTER_STUDENT_MESSAGE;
    }
    return FilterStudentMessageAction;
}());
export { FilterStudentMessageAction };
var FilterAgentMessageAction = (function () {
    function FilterAgentMessageAction() {
        this.type = FILTER_AGENT_MESSAGE;
    }
    return FilterAgentMessageAction;
}());
export { FilterAgentMessageAction };
//# sourceMappingURL=chat-message.actions.js.map