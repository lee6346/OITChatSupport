import {
    Agent,
    AgentMessage,
    DirectLineThread,
    LiveRequest
} from '../shared/model';

import { Activity } from 'botframework-directlinejs';


export interface DirectLineSessionsState {

    directLineSessions: DirectLineSessionState[];
}

export const initialDirectLineSessionsState: DirectLineSessionsState = {
    directLineSessions: []
};

export interface DirectLineSessionState {
    directLineThread: DirectLineThread;
    activityMessages: Activity[]; 
}

export const initialDirectLineSessionState: DirectLineSessionState = {
    directLineThread: new DirectLineThread(),
    activityMessages: []
};

export interface LiveRequestsState {
    liveRequests: LiveRequest[];
}

export const initialLiveRequestState: LiveRequestsState = {
    liveRequests: []
};

export interface AgentsState {
    agents: Agent[];
}

export const initialAgentsState: AgentsState = {
    agents: []
};

export interface GroupChatState {
    groupMessages: AgentMessage[];
}

export const initialGroupChatState: GroupChatState = {
    groupMessages: []
};

export interface ApplicationState{
    directLineSessions: DirectLineSessionsState;
    currentSession: DirectLineSessionState;
    liveRequests: LiveRequestsState;
    agents: AgentsState;
    groupChat: GroupChatState;
}

export const initialApplicationState: ApplicationState = {
    directLineSessions: initialDirectLineSessionsState,
    currentSession: initialDirectLineSessionState,
    liveRequests: initialLiveRequestState,
    agents: initialAgentsState,
    groupChat: initialGroupChatState
};



