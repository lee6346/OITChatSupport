import { ActionReducer, ActionReducerMap, compose, combineReducers, createSelector, MetaReducer, MemoizedSelector } from '@ngrx/store';
import * as fromAgents from './agents.reducer';
import * as fromDirectLine from './direct-line.reducer';
import * as fromGroupChat from './group-chat.reducer';
import * as fromLiveRequest from './live-request.reducer';

export interface ApplicationState {
    agents: fromAgents.AgentsState;
    //directLineSession: fromDirectLine.DirectLineSessionState;
    directLineSessions: fromDirectLine.DirectLineSessionsState;
    liveRequests: fromLiveRequest.LiveRequestsState;
    groupChat: fromGroupChat.GroupChatState;
}
export const initialApplicationState: ApplicationState = {
    agents: fromAgents.initialAgentsState,
    //directLineSession: fromDirectLine.initialDirectLineSessionState,
    directLineSessions: fromDirectLine.initialDirectLineSessionsState,
    liveRequests: fromLiveRequest.initialLiveRequestState,
    groupChat: fromGroupChat.initialGroupChatState
};
export const reducers: ActionReducerMap<ApplicationState> = {
    agents: fromAgents.agentsReducer,
    //directLineSession: fromDirectLine.currentSessionReducer,
    directLineSessions: fromDirectLine.directLineSessionsReducer,
    liveRequests: fromLiveRequest.liveRequestsReducer,
    groupChat: fromGroupChat.groupChatReducer
};
export const getAgentsState = (state: ApplicationState) => state.agents;
export const getAgents = createSelector(getAgentsState, (state: fromAgents.AgentsState) => state.agents);
export const getLoggedAgents = createSelector(getAgentsState, (state: fromAgents.AgentsState) => state.agents.filter(agent => agent.connected));
/*export const getDirectLineSessionState = (state: ApplicationState) => state.directLineSession;
export const getDirectLineThread = createSelector(
    getDirectLineSessionState, (state: fromDirectLine.DirectLineSessionState) => state.directLineThread);
export const getDirectLineMessages = createSelector(
    getDirectLineSessionState, (state: fromDirectLine.DirectLineSessionState) => state.activityMessages);
*/
export const getDirectLineSessionsState = (state: ApplicationState) => state.directLineSessions;
export const getDirectLineSessions = createSelector(
    getDirectLineSessionsState, (state: fromDirectLine.DirectLineSessionsState) => state.directLineSessions);
export const getLiveRequestsState = (state: ApplicationState) => state.liveRequests;
export const getLiveRequests = createSelector(getLiveRequestsState, (state: fromLiveRequest.LiveRequestsState) => state.liveRequests);
export const getGroupChatState = (state: ApplicationState) => state.groupChat;
export const getGroupMessages = createSelector(getGroupChatState, (state: fromGroupChat.GroupChatState) => state.groupMessages);