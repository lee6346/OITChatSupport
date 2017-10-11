import { Action, ActionReducer } from "@ngrx/store";
import { Activity } from 'botframework-directlinejs';
import { DirectLineConnection, DirectLineThread } from "../../shared/model";
import * as directLineAction from '../action/direct-line.action';

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



export function currentSessionReducer(state = initialDirectLineSessionState, action: directLineAction.Actions): DirectLineSessionState {
    switch (action.type) {
        case directLineAction.CHANGE_DIRECT_LINE_SESSION_COMPLETE:
            return state;
        default:
            return state;
    }
}

export function directLineSessionsReducer(state = initialDirectLineSessionsState, action: directLineAction.Actions): DirectLineSessionsState {
    switch (action.type) {
        case directLineAction.SEND_MESSAGE_ACTIVITY_COMPLETE:
            return state;
        default:
            return state;
    }
}

export const getDirectLineSessions = (state: DirectLineSessionsState) => state.directLineSessions;
export const getDirectLineThread = (state: DirectLineSessionState) => state.directLineThread;
export const getDirectLineMessages = (state: DirectLineSessionState) => state.activityMessages;
