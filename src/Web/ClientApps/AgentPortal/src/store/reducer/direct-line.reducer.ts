import { Action, ActionReducer } from "@ngrx/store";
import {
    DirectLineSessionsState,
    DirectLineSessionState,
    initialDirectLineSessionsState,
    initialDirectLineSessionState
} from '../app-data.store';

import { DirectLineConnection } from "../../shared/model";
import * as directLineAction from '../action/direct-line.action';

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
