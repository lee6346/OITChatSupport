import { Action, ActionReducer } from "@ngrx/store";
import * as directLineState from "../state/directline.state";
import { DirectLineConnection } from "../../shared/model/directline-connection.model";
import * as directLineAction from '../action/direct-line.action';



export const initialSessionState: directLineState.DirectLineSessionState = {
    conversationId: '',
    activityIds: [],
    agentId: '',
    current: false
};

export const initialSessionsState: directLineState.DirectLineSessionsState = {
    connections: []
};

export const initialActivitiesState: directLineState.DirectLineActivitiesState = {
    conversationId: '',
    activities: [],
    unreadCount: 0
};

export function directLineSessionsReducer(
    state = initialSessionsState,
    action: directLineAction.Actions): directLineState.DirectLineSessionsState {

    case directLineAction.
}