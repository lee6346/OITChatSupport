import { Message} from 'botframework-directlinejs';


export interface LiveRequest {
    conversationId: string;
    user: string;
    botHandle: string;
    timeRequested: string;
    messageActivities?: Message[];

}

export function createMockLiveRequest(): LiveRequest {
    return {
        conversationId: '123456',
        user: 'student',
        botHandle: 'AskRowdy',
        timeRequested: Date.now().toString()
    };
}