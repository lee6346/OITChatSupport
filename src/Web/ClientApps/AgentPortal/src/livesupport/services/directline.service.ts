import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { DirectLine, Conversation, Activity, ConnectionStatus } from 'botframework-directlinejs';
import { Observable } from 'rxjs/Observable';
import { State } from '../reducers/index';
import { ChatThread, ChatPayload, ActivityGroup } from '../models';
import { MessageActivityReceivedAction } from '../actions/chat-message.actions';
import { ThreadDisconnectedAction } from '../actions/chat-thread.actions';
import { environment } from '../../../environments/environment';

@Injectable()
export class DirectLineService {

    private directLineSet: Map<string, DirectLine>;
    private directLineConnectionCount: number;
    constructor(
        private http: HttpClient,
        private store: Store<State>
    ) {
        this.directLineSet = new Map<string, DirectLine>();
        this.directLineConnectionCount = 0;
    }

    createDirectLineConnection$(conversationId: string): Observable<ChatThread> {
        return this.http.get<Conversation>(
            environment.baseWebUrl +
            environment.chatStreamUrl + '/' +
            conversationId
        ).map((conversation: Conversation) => this.createDirectLineConnection(conversation));
    }

    createDirectLineConnection(conversation: Conversation): ChatThread {
        let connection: DirectLine = new DirectLine({
            conversationId: conversation.conversationId,
            token: conversation.token,
            streamUrl: conversation.streamUrl
        });
        this.subscribeToConnection(connection);
        this.directLineSet.set(conversation.conversationId, connection);
        this.directLineConnectionCount++;
        return this.createChatThread(conversation.conversationId);

    }
    subscribeToConnection(directLine: DirectLine): void {
        directLine.activity$.filter(this.filterStudentMessage).subscribe(
            (activity: Activity) => {
                let recId: string = typeof activity.conversation === 'undefined' ? '' : activity.conversation.id;
                if (activity.type === 'message' && activity.inputHint === 'disconnect') {
                    this.store.dispatch(new ThreadDisconnectedAction(recId));
                }
                else
                    this.store.dispatch(new MessageActivityReceivedAction(activity));
            },
            (error: any) => console.log('DirectlineService.subscribeToConnection() error'),
            () => console.log('connection ' + directLine + 'ended')
        );
        
    }

    createChatThread(threadId: string): ChatThread{
        let thread: ChatThread = {
            threadId: threadId,
            active: true,
            unseenMessages: []
        };
        return thread;
    }

    getCachedActivities$(conversation: Conversation): Observable<Activity[]> {
        return this.http.get<ActivityGroup>(
            environment.directLineUrl +
            environment.postMessage + conversation.conversationId +
            '/activities', { headers: new HttpHeaders().set('Authorization', 'Bearer ' + conversation.token) }
        ).map((group: ActivityGroup) => group.activities);
    }

    sendMessage(payload: ChatPayload): Activity {
        let connector: DirectLine | undefined = this.directLineSet.get(payload.threadId);
        if (typeof connector === 'undefined')
            throw Error;
        else {
            let message: Activity = {
                conversation: { id: payload.threadId },
                from: { id: payload.senderId },
                type: 'message',
                text: payload.text,
                timestamp: new Date(Date.now()).toUTCString()
            };
            connector.postActivity(message).subscribe(
                (id: string) => console.log('DirectLineService.sendMessage: ' + id),
                (err: any) => console.log('DirectLineService.sendMessage->PostActivity error')
            );
            return message;
        }
    }

    removeConnection(threadId: string): void {
        let connection: DirectLine | undefined = this.directLineSet.get(threadId);
        if (typeof connection !== 'undefined') {
            connection.end();
            this.directLineSet.delete(threadId);
            console.log('removed connection');
            this.directLineConnectionCount--;
        }
    }

    filterStudentMessage = (activity: Activity) => activity.from.id === 'student';
}
