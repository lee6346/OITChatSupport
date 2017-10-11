import { DirectLine } from 'botframework-directlinejs';

export class DirectLineThread {

    conversationId: string;
    directLineSocket: DirectLine;

    constructor(){}

    sameAs(directLineThread: DirectLineThread): boolean {
        return this.conversationId === directLineThread.conversationId;
    }
}