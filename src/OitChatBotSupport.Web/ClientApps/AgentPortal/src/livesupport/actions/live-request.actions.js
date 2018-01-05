export var ACCEPT_LIVE_REQUEST = '[Request] ACCEPT_LIVE_REQUEST';
export var LIVE_REQUEST_ACCEPTED = '[Request] LIVE_REQUEST_ACCEPTED';
export var LIVE_REQUEST_REMOVED = '[Request] LIVE_REQUEST_REMOVED';
export var LIVE_REQUEST_RECEIVED = '[Request] LIVE_REQUEST_RECEIVED';
export var LOAD_LIVE_REQUESTS = '[Request] LOAD_LIVE_REQUESTS';
export var LIVE_REQUESTS_LOADED = '[Request] LIVE_REQUESTS_LOADED';
export var EXPAND_REQUEST_VIEW = '[Request] EXPAND_REQUEST_VIEW';
var AcceptLiveRequestAction = (function () {
    function AcceptLiveRequestAction(liveRequest) {
        this.liveRequest = liveRequest;
        this.type = ACCEPT_LIVE_REQUEST;
    }
    return AcceptLiveRequestAction;
}());
export { AcceptLiveRequestAction };
var LiveRequestAcceptedAction = (function () {
    function LiveRequestAcceptedAction(conversation, bot) {
        this.conversation = conversation;
        this.bot = bot;
        this.type = LIVE_REQUEST_ACCEPTED;
    }
    return LiveRequestAcceptedAction;
}());
export { LiveRequestAcceptedAction };
var LiveRequestRemovedAction = (function () {
    function LiveRequestRemovedAction(removeRequest) {
        this.removeRequest = removeRequest;
        this.type = LIVE_REQUEST_REMOVED;
    }
    return LiveRequestRemovedAction;
}());
export { LiveRequestRemovedAction };
var LiveRequestReceivedAction = (function () {
    function LiveRequestReceivedAction(liveRequest) {
        this.liveRequest = liveRequest;
        this.type = LIVE_REQUEST_RECEIVED;
    }
    return LiveRequestReceivedAction;
}());
export { LiveRequestReceivedAction };
var LoadLiveRequestsAction = (function () {
    function LoadLiveRequestsAction() {
        this.type = LOAD_LIVE_REQUESTS;
    }
    return LoadLiveRequestsAction;
}());
export { LoadLiveRequestsAction };
var LiveRequestsLoadedAction = (function () {
    function LiveRequestsLoadedAction(liveRequest) {
        this.liveRequest = liveRequest;
        this.type = LIVE_REQUESTS_LOADED;
    }
    return LiveRequestsLoadedAction;
}());
export { LiveRequestsLoadedAction };
var ExpandRequestViewAction = (function () {
    function ExpandRequestViewAction(expand) {
        this.expand = expand;
        this.type = EXPAND_REQUEST_VIEW;
    }
    return ExpandRequestViewAction;
}());
export { ExpandRequestViewAction };
//# sourceMappingURL=live-request.actions.js.map