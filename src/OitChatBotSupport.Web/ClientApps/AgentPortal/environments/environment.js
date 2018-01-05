export var environment = {
    production: false,
    development: true,
    test: false,
    baseWebUrl: 'http://localhost:5000/',
    error: 'home/error',
    logOut: 'account/logout',
    agentGroup: 'api/account/group',
    chatToken: 'api/botconnection/token',
    chatStreamUrl: 'api/botconnection/streamurl',
    liveRequests: 'api/agentsupport/currentrequests',
    acceptRequest: 'api/agentsupport/acceptrequest',
    groupMessages: 'api/groupchat/messages',
    agentMessage: 'api/groupchat/message',
    directLineUrl: 'https://directline.botframework.com/',
    postMessage: 'v3/directline/conversations/',
    activities: function (conversationId) { return postMessage + conversationId + '/activities'; }
};
//# sourceMappingURL=environment.js.map