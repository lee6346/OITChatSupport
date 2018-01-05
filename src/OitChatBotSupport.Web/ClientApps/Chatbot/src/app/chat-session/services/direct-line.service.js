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
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { DirectLine } from 'botframework-directlinejs';
import { MessageActivityReceivedAction } from '../actions/directline-activity.actions';
var DirectLineService = (function () {
    function DirectLineService(http, store) {
        this.http = http;
        this.store = store;
        this.chatTokenApi = 'http://localhost:5000/api/chattoken/newsession';
        this.postMessageApi = 'https://directline.botframework.com/v3/directline/conversations/';
    }
    DirectLineService.prototype.getToken$ = function () {
        return this.http.get(this.chatTokenApi);
    };
    DirectLineService.prototype.startDirectLineSession = function (conversation) {
        var _this = this;
        this.directLineSocket = new DirectLine({
            token: conversation.token,
            webSocket: true,
        });
        this.directLineSocket.activity$.filter(function (activity) { return activity.from.id !== 'student'; })
            .subscribe(function (activity) {
            if (activity.type === 'message')
                _this.store.dispatch(new MessageActivityReceivedAction(activity));
        }, function (err) { });
        return conversation.conversationId;
    };
    DirectLineService.prototype.postMessage = function (message) {
        var messageActivity = this.normalizeToActivityMessage(message);
        this.directLineSocket
            .postActivity(messageActivity).subscribe(function (next) { }, function (err) { });
        return messageActivity;
    };
    DirectLineService.prototype.endConnection = function (conversationId) {
        this.directLineSocket.postActivity({
            conversation: { id: conversationId },
            from: { id: 'student' },
            type: 'message',
            inputHint: 'disconnect',
            text: 'student has disconnected'
        }).subscribe(function (next) { }, function (err) { });
        this.directLineSocket.end();
    };
    DirectLineService.prototype.normalizeToActivityMessage = function (message) {
        return {
            conversation: {
                id: message.conversationId
            }, from: { id: 'student' },
            type: 'message',
            text: message.text,
            timestamp: new Date(Date.now()).toUTCString()
        };
    };
    DirectLineService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            Store])
    ], DirectLineService);
    return DirectLineService;
}());
export { DirectLineService };
//# sourceMappingURL=direct-line.service.js.map