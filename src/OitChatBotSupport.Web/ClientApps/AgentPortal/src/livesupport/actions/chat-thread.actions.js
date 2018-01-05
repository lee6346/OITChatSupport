export var THREAD_CREATED = '[Thread] THREAD_CREATED';
export var REMOVE_THREAD = '[Thread] REMOVE_THREAD';
export var THREAD_REMOVED = '[Thread] THREAD_REMOVED';
export var THREAD_DISCONNECTED = '[Thread] THREAD_DISCONNECTED';
export var SWITCH_THREAD = '[Thread] SWITCH_THREAD';
var ThreadCreatedAction = (function () {
    function ThreadCreatedAction(thread) {
        this.thread = thread;
        this.type = THREAD_CREATED;
    }
    return ThreadCreatedAction;
}());
export { ThreadCreatedAction };
var ThreadDisconnectedAction = (function () {
    function ThreadDisconnectedAction(threadId) {
        this.threadId = threadId;
        this.type = THREAD_DISCONNECTED;
    }
    return ThreadDisconnectedAction;
}());
export { ThreadDisconnectedAction };
var RemoveThreadAction = (function () {
    function RemoveThreadAction(threadId) {
        this.threadId = threadId;
        this.type = REMOVE_THREAD;
    }
    return RemoveThreadAction;
}());
export { RemoveThreadAction };
var ThreadRemovedAction = (function () {
    function ThreadRemovedAction(threadId) {
        this.threadId = threadId;
        this.type = THREAD_REMOVED;
    }
    return ThreadRemovedAction;
}());
export { ThreadRemovedAction };
var SwitchThreadAction = (function () {
    function SwitchThreadAction(threadId) {
        this.threadId = threadId;
        this.type = SWITCH_THREAD;
    }
    return SwitchThreadAction;
}());
export { SwitchThreadAction };
//# sourceMappingURL=chat-thread.actions.js.map