import { Activity } from 'botframework-directlinejs';
import { DirectLineConnection } from '../../shared/model/directline-connection.model';

export interface DirectLineSessionState{
    conversationId: string; 
    activityIds: string[];
    agentId: string;
    current: boolean;
}

export interface DirectLineSessionsState {
    connections: DirectLineConnection[];

}

export interface DirectLineActivitiesState {
    conversationId: string;
    activities: Activity[];
    unreadCount?: number;
}


