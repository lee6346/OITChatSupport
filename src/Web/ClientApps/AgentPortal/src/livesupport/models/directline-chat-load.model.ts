import { IBotConnection, Activity } from 'botframework-directlinejs';

export interface DirectLineChatLoad{
    activity: Activity;
    connection: IBotConnection;
}