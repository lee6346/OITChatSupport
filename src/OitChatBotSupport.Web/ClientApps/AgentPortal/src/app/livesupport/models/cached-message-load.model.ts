import { Activity } from 'botframework-directlinejs';

export interface CachedMessageLoad{
    threadId: string;
    cachedMessageSet: Activity[];
}