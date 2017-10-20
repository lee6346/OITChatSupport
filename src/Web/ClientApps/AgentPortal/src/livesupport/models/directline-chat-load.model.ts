import { DirectLine, Activity } from 'botframework-directlinejs';

export interface DirectLineChatLoad{
    activity: Activity;
    connection: DirectLine;
}