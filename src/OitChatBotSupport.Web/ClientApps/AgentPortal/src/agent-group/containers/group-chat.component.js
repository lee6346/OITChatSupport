var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAgentGroup from '../reducers/index';
import * as agentGroup from '../actions/agent-group.actions';
var GroupChatComponent = (function () {
    function GroupChatComponent(store) {
        this.store = store;
        this.groupMessages$ = store.select(fromAgentGroup.getGroupMessages).map(function (val) { return val.toArray(); });
    }
    GroupChatComponent.prototype.ngOnInit = function () { };
    GroupChatComponent.prototype.onMessageSubmitted = function (message) {
        var payload = {
            agentId: 'jvr632',
            group: 'askrowdy',
            text: message,
        };
        this.store.dispatch(new agentGroup.SendGroupMessageAction(payload));
    };
    GroupChatComponent = __decorate([
        Component({
            selector: 'group-chat',
            templateUrl: './group-chat.component.html',
            styleUrls: ['./group-chat.component.css'],
        }),
        __metadata("design:paramtypes", [Store])
    ], GroupChatComponent);
    return GroupChatComponent;
}());
export { GroupChatComponent };
//# sourceMappingURL=group-chat.component.js.map