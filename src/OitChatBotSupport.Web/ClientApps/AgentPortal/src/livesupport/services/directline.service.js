var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { DirectLine } from 'botframework-directlinejs';
import { MessageActivityReceivedAction } from '../actions/chat-message.actions';
import { ThreadDisconnectedAction } from '../actions/chat-thread.actions';
import { environment } from '../../../environments/environment';
var DirectLineService = (function () {
    function DirectLineService(http, store) {
        this.http = http;
        this.store = store;
        this.filterStudentMessage = function (activity) { return activity.from.id === 'student'; };
        this.botToTopicMap = function (bot) {
            if (bot.toLowerCase() === 'askrowdy')
                return 'Print Spot';
            else if (bot.toLowerCase() == 'library')
                return 'Utsa Library';
            else
                return 'General Questions';
        };
        this.directLineSet = new Map();
        this.directLineConnectionCount = 0;
    }
    DirectLineService.prototype.createDirectLineConnection$ = function (conversationId, bot) {
        var _this = this;
        return this.http.get(environment.baseWebUrl +
            environment.chatStreamUrl + '/' +
            conversationId).map(function (conversation) { return _this.createDirectLineConnection(conversation, bot); });
    };
    DirectLineService.prototype.createDirectLineConnection = function (conversation, bot) {
        var connection = new DirectLine({
            conversationId: conversation.conversationId,
            token: conversation.token,
            streamUrl: conversation.streamUrl
        });
        this.subscribeToConnection(connection);
        this.directLineSet.set(conversation.conversationId, connection);
        this.directLineConnectionCount++;
        return this.createChatThread(conversation.conversationId, bot);
    };
    DirectLineService.prototype.subscribeToConnection = function (directLine) {
        var _this = this;
        directLine.activity$.filter(this.filterStudentMessage).subscribe(function (activity) {
            var recId = typeof activity.conversation === 'undefined' ? '' : activity.conversation.id;
            if (activity.type === 'message' && activity.inputHint === 'disconnect') {
                _this.store.dispatch(new ThreadDisconnectedAction(recId));
            }
            else
                _this.store.dispatch(new MessageActivityReceivedAction(activity));
        }, function (error) { return console.log('DirectlineService.subscribeToConnection() error'); }, function () { return console.log('connection ' + directLine + 'ended'); });
    };
    DirectLineService.prototype.createChatThread = function (threadId, bot) {
        var thread = {
            threadId: threadId,
            active: true,
            topic: this.botToTopicMap(bot),
            unseenMessages: []
        };
        return thread;
    };
    DirectLineService.prototype.getCachedActivities$ = function (conversation) {
        return this.http.get(environment.directLineUrl +
            environment.postMessage + conversation.conversationId +
            '/activities', { headers: new HttpHeaders().set('Authorization', 'Bearer ' + conversation.token) }).map(function (group) { return group.activities; });
    };
    DirectLineService.prototype.sendMessage = function (payload) {
        var connector = this.directLineSet.get(payload.threadId);
        if (typeof connector === 'undefined')
            throw Error;
        else {
            var message = {
                conversation: { id: payload.threadId },
                from: { id: payload.senderId },
                type: 'message',
                text: payload.text,
                timestamp: new Date(Date.now()).toUTCString()
            };
            connector.postActivity(message).subscribe(function (id) { return console.log('DirectLineService.sendMessage: ' + id); }, function (err) { return console.log('DirectLineService.sendMessage->PostActivity error'); });
            return message;
        }
    };
    DirectLineService.prototype.removeConnection = function (threadId) {
        var connection = this.directLineSet.get(threadId);
        if (typeof connection !== 'undefined') {
            connection.end();
            this.directLineSet.delete(threadId);
            console.log('removed connection');
            this.directLineConnectionCount--;
        }
    };
    DirectLineService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            Store])
    ], DirectLineService);
    return DirectLineService;
}());
export { DirectLineService };
//# sourceMappingURL=directline.service.js.map