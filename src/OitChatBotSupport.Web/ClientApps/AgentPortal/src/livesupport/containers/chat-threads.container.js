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
import * as fromLiveSupport from '../reducers/index';
import { RemoveThreadAction, SwitchThreadAction } from '../actions/chat-thread.actions';
var ChatThreadsContainer = (function () {
    function ChatThreadsContainer(store) {
        this.store = store;
        this.directLineThreads$ = store.select(fromLiveSupport.getThreadList).map(function (threadList) { return threadList.toArray(); });
        this.selectedThreadId$ = store.select(fromLiveSupport.getSelectedThreadId);
        this.currentThreadCount$ = this.directLineThreads$.map(function (x) { return x.length; });
        this.timer$ = store.select(fromLiveSupport.getCurrentTime);
    }
    ChatThreadsContainer.prototype.ngOnInit = function () { };
    ChatThreadsContainer.prototype.onSwitchThread = function (threadId) {
        this.store.dispatch(new SwitchThreadAction(threadId));
    };
    ChatThreadsContainer.prototype.onRemoveThread = function (threadId) {
        this.store.dispatch(new RemoveThreadAction(threadId));
    };
    ChatThreadsContainer = __decorate([
        Component({
            selector: 'chat-threads',
            template: "\n        <div class=\"current-threads-container\">\n            <chat-threads-header [currentThreadCount]=\"currentThreadCount$ | async\"></chat-threads-header>\n            <chat-thread-list [threads]=\"directLineThreads$ | async\"\n                                [selectedThreadId]=\"selectedThreadId$ | async\"\n                                [timer]=\"timer$ | async\"\n                                (switchThread)=\"onSwitchThread($event)\"\n                                (removeThread)=\"onRemoveThread($event)\"></chat-thread-list> \n        </div>\n    ",
            styles: ["\n    .current-threads-container {\n        height: 100%;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [Store])
    ], ChatThreadsContainer);
    return ChatThreadsContainer;
}());
export { ChatThreadsContainer };
//# sourceMappingURL=chat-threads.container.js.map