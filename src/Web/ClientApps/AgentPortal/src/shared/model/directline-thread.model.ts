import { IBotConnection } from 'botframework-directlinejs';

export interface DirectLineThread {

    conversationId: string;
    directLineConnection: IBotConnection;

}