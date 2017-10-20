import { DirectLine } from 'botframework-directlinejs';

export interface DirectLineSession {
    directLineContext: DirectLineContext;
    connector: DirectLine;
}
export interface DirectLineContext {
    conversationId: string;
    user: string;
    botHandle: string;
    text: string;
}