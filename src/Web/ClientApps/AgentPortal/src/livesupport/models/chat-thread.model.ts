import { Activity } from 'botframework-directlinejs';
export interface ChatThread{
    threadId: string;
    active: boolean;
    unseenMessages: Activity[];
    lastSentTime?: string;
}