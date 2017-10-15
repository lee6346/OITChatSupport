import { IBotConnection, Activity } from 'botframework-directlinejs';

export interface DirectLineMessageLoad {
    message: Activity;
    directLineConnector: IBotConnection;
}