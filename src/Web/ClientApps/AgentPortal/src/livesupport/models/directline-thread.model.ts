import { DirectLine } from 'botframework-directlinejs';

export interface DirectLineThread{
    conversationId: string;
    messageIds: string[];
    cachedMessageIds: string[];
    active: boolean;
    unseenMessages:number;
    connection: DirectLine;
}
