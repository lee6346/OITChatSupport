import { Activity } from 'botframework-directlinejs';
export interface ChatThread{
    threadId: string;
    active: boolean;
    topic: string;
    unseenMessages: Activity[];
    lastSentTime?: string;
}