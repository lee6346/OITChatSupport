import { IBotConnection, Activity } from 'botframework-directlinejs';

export interface DirectLineSession {
    conversationId: string;
    activityMessages: Activity[];
    connection: IBotConnection;
    //cachedMessages: Activity[];
}