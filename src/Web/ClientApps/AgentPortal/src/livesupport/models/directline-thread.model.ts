import { DirectLine } from 'botframework-directlinejs';

export interface DirectLineThread{
    conversationId: string;
    messageIds: string[];
    cachedMessageIds: string[];
    active: boolean;
    connection: DirectLine;
}


export interface ChatSessionThread {
    threadId: string;
    unseenMessageIds: string[];
    active: boolean;
}