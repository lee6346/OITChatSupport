import { Activity } from 'botframework-directlinejs';

export interface ActivityGroup {
    activities: Activity[],
    watermark: string
}